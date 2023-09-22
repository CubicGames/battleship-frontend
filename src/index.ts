import {
  Ed25519Keypair,
  JsonRpcProvider,
  RawSigner,
  TransactionBlock,
  localnetConnection,
  normalizeSuiObjectId,
  fromB64,
} from '@mysten/sui.js';
import { bigintToHex } from 'bigint-conversion'

import { groth16 } from "snarkjs";
import { buildBn128, Scalar } from "ffjavascript";
import { buildMimcSponge } from "circomlibjs"

async function GenBoardProof(board:string[][]): Promise<any> {
  const vkey = await fetch('/zk/board_verification_key.json').then((res) => {
    return res.json();
  });
  return await GenBoardProofByBoardAndBinaries(board,'/zk/board_js/board.wasm', '/zk/zkey/board_final.zkey', vkey);
}

async function GenBoardProofByBoardAndBinaries(board:string[][], wasmPath:string, zkeyPath:string, vkey:any): Promise<any> {
  console.log(`GenBoardProof start`)

  // instantiate mimc sponge on bn254 curve + store ffjavascript obj reference
  const mimcSponge = await buildMimcSponge()
  // store board hashes for quick use
  let boardHash = await mimcSponge.multiHash(board.flat())
  let F = mimcSponge.F
  // board starting verification proof public / private inputs
  const input = {
    ships: board,
    hash: F.toObject(boardHash)
  }
  // compute witness and run through groth16 circuit for proof / signals
  const { proof, publicSignals } = await groth16.fullProve(
    input,
    wasmPath,
    zkeyPath,
  )
  console.log(`proof=${JSON.stringify(proof, null, 2)}`)
  console.log(`vkey=${JSON.stringify(vkey, null, 2)}`)
  // verify proof locally
  let result = await groth16.verify(
    vkey,
    publicSignals,
    proof
  )
  console.log(`verify proof result=${JSON.stringify(result, null, 2)}`)
  if (!result) {
	  console.log(`verify proof failed`)
	  return
  }

  console.log(`input.hash=${input.hash}`)
  let hex = bigintToHex(input.hash, false, 32)
  console.log(`hex=${hex}`)
  let hashStr = reverseHex(hex);
  let proofStr = await parseProof(proof);
  let hashArr = hexToArr(hashStr);
  let proofArr = hexToArr(proofStr);

  console.log(`GenBoardProof end`)
  return {hashArr, proofArr}
}

async function GenShotProof(board:string[][], x: number, y: number, hit: boolean): Promise<any> {
  console.log(`GenShotProof start`)

  // instantiate mimc sponge on bn254 curve + store ffjavascript obj reference
  const mimcSponge = await buildMimcSponge()

  // store board hashes for quick use
  let boardHash = await mimcSponge.multiHash(board.flat())
  let F = mimcSponge.F

  // board starting verification proof public / private inputs
  const input = {
    ships: board,
    hash: F.toObject(boardHash),
    shot: [x, y],
    hit: hit ? 1 : 0,
  }
  // compute witness and run through groth16 circuit for proof / signals
  const { proof, publicSignals } = await groth16.fullProve(
    input,
    '/zk/shot_js/shot.wasm',
    '/zk/zkey/shot_final.zkey'
  )
  console.log(`proof=${JSON.stringify(proof, null, 2)}`)
    const vkey = await fetch('/zk/shot_verification_key.json').then((res) => {
      return res.json();
    });
  console.log(`vkey=${JSON.stringify(vkey, null, 2)}`)
  // verify proof locally
  let result = await groth16.verify(
    vkey,
    publicSignals,
    proof
  )
  console.log(`verify proof result=${JSON.stringify(result, null, 2)}`)
  if (!result) {
	  console.log(`verify proof failed`)
	  return
  }

  console.log(`input.hash=${input.hash}`)
  let hex = bigintToHex(input.hash, false, 32)
  console.log(`hex=${hex}`)
  let hashStr = reverseHex(hex);
  let proofStr = await parseProof(proof);
  let hashArr = hexToArr(hashStr);
  let proofArr = hexToArr(proofStr);

  console.log(`GenShotProof end`)
  return {hashArr, proofArr}
}

function reverseHex(str: string): string {
	console.log(`reverseHex str=${str}`)
	console.log(`reverseHex str.length=${str.length}`)
  let res = "";
  for (let i = str.length - 2; i >= 0; i = i - 2) {
    res = res + (str[i] + str[i + 1]);
  }
  if (str.length % 2 == 1) {
    res = res + "0" + str[0];
  }
	console.log(`reverseHex res=${res}`)
	console.log(`reverseHex res.length=${res.length}`)
  return res
}

function buff2hex(buff: any): any {
  function i2hex(i: any) {
    return ('0' + i.toString(16)).slice(-2);
  }
  return Array.from(buff).map(i2hex).join('');
}

function reverse(arr: Uint8Array): Uint8Array {
  let len = arr.length;
  let res = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    res[i] = arr[len - 1 - i];
  }
  return res;
}

async function parseProof(proof: any): Promise<any> {
  const bn128 = await buildBn128();
  let pi_a_P = bn128.G1.fromObject(
    [
      Scalar.e(proof.pi_a[0], 10),
      Scalar.e(proof.pi_a[1], 10),
      proof.pi_a[2] == '1' ? Scalar.one : Scalar.zero
    ]
  );
  let pi_b_P = bn128.G2.fromObject([
    [
      Scalar.e(proof.pi_b[0][0], 10),
      Scalar.e(proof.pi_b[0][1], 10)
    ],
    [
      Scalar.e(proof.pi_b[1][0], 10),
      Scalar.e(proof.pi_b[1][1], 10)
    ],
    [
      proof.pi_b[2][0] == '1' ? Scalar.one : Scalar.zero,
      proof.pi_b[2][1] == '0' ? Scalar.zero : Scalar.one
    ]
  ]);
  let pi_c_P = bn128.G1.fromObject(
    [
      Scalar.e(proof.pi_c[0], 10),
      Scalar.e(proof.pi_c[1], 10),
      proof.pi_c[2] == '1' ? Scalar.one : Scalar.zero
    ]
  );
  const buff_a = new Uint8Array(32);
  const buff_b = new Uint8Array(64);
  const buff_c = new Uint8Array(32);
  bn128.G1.toRprCompressed(buff_a, 0, pi_a_P);
  bn128.G2.toRprCompressed(buff_b, 0, pi_b_P);
  bn128.G1.toRprCompressed(buff_c, 0, pi_c_P);

  return buff2hex(reverse(buff_a)) + buff2hex(reverse(buff_b)) + buff2hex(reverse(buff_c));
}

function hexToArr(hexString: string): any[] {
  let arr = new Array();
  for (let i = 0; i < hexString.length; i += 2) {
    let byte = parseInt(hexString.substring(i, i + 2), 16);
    arr.push(byte);
  }
  return arr;
}

export {
	GenBoardProof,
  GenBoardProofByBoardAndBinaries,
	GenShotProof
}
