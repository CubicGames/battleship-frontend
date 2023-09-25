import {describe, expect, test} from '@jest/globals';
import { GenBoardProofByBoardAndBinaries, GenShotProofByShotAndBinaries } from './index';
import { GenerateBoardConfig, GenerateBoardFromShips } from './board';
import * as fs from 'fs';


describe('zk module', () => {
    test('Generate board proof multiple times ok', async () => {
      let count;
      for (count = 0; count < 20; count++) {
        const { boardInShips } = GenerateBoardConfig();
        //console.log(`boardInShips=${JSON.stringify(boardInShips)}`);
        const vkey = JSON.parse(fs.readFileSync('public/zk/board_verification_key.json', 'utf-8'));
        //console.log(`vkey=${JSON.stringify(vkey)}`);
        const { hashArr, proofArr } = await GenBoardProofByBoardAndBinaries(boardInShips,'public/zk/board_js/board.wasm', 'public/zk/zkey/board_final.zkey', vkey);
        expect(hashArr.length).toBeGreaterThan(0);
        expect(proofArr.length).toBeGreaterThan(0);
        console.log(`count=${count}`);
      }
    });
    test('Should generate board proof ok, a failing case', async () => {
      const boardInShips = [
        ["8", "4", "1"],
        ["5", "3", "1"],
        ["3", "5", "1"],
        ["2", "3", "1"],
        ["6", "5", "1"],
      ];
      //console.log(`boardInShips=${JSON.stringify(boardInShips)}`);
      const vkey = JSON.parse(fs.readFileSync('public/zk/board_verification_key.json', 'utf-8'));
      //console.log(`vkey=${JSON.stringify(vkey)}`);
      const { hashArr, proofArr} = await GenBoardProofByBoardAndBinaries(boardInShips,'public/zk/board_js/board.wasm', 'public/zk/zkey/board_final.zkey', vkey);
      expect(hashArr.length).toBeGreaterThan(0);
      expect(proofArr.length).toBeGreaterThan(0);
    });
    test('Should generate shot proof ok', async () => {
      const boardInShips = [
        ["8", "4", "1"],
        ["5", "3", "1"],
        ["3", "5", "1"],
        ["2", "3", "1"],
        ["6", "5", "1"],
      ];
      //console.log(`boardInShips=${JSON.stringify(boardInShips)}`);
      const vkey = JSON.parse(fs.readFileSync('public/zk/shot_verification_key.json', 'utf-8'));
      //console.log(`vkey=${JSON.stringify(vkey)}`);
      let { hashArr, proofArr} = await GenShotProofByShotAndBinaries(boardInShips, 8, 4, true, 'public/zk/shot_js/shot.wasm', 'public/zk/zkey/shot_final.zkey', vkey);
      expect(hashArr.length).toBeGreaterThan(0);
      expect(proofArr.length).toBeGreaterThan(0);
      ({ hashArr, proofArr} = await GenShotProofByShotAndBinaries(boardInShips, 0, 0, false, 'public/zk/shot_js/shot.wasm', 'public/zk/zkey/shot_final.zkey', vkey));
      expect(hashArr.length).toBeGreaterThan(0);
      expect(proofArr.length).toBeGreaterThan(0);
    });
    test('Should generate shot proof for all positions on the board ok', async () => {
      const { board, boardInShips } = GenerateBoardConfig();
      //console.log(`boardInShips=${JSON.stringify(boardInShips)}`);
      const vkey = JSON.parse(fs.readFileSync('public/zk/shot_verification_key.json', 'utf-8'));
      //console.log(`vkey=${JSON.stringify(vkey)}`);
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const hit = board[i][j] == 'O' ? true : false;
          let { hashArr, proofArr} = await GenShotProofByShotAndBinaries(boardInShips, i, j, hit, 'public/zk/shot_js/shot.wasm', 'public/zk/zkey/shot_final.zkey', vkey);
          expect(hashArr.length).toBeGreaterThan(0);
          expect(proofArr.length).toBeGreaterThan(0);
        }
      }
    });
    test('Should generate shot proof fail by incorrect hit state', async () => {
      const boardInShips = [
        ["8", "4", "1"],
        ["5", "3", "1"],
        ["3", "5", "1"],
        ["2", "3", "1"],
        ["6", "5", "1"],
      ];
      //console.log(`boardInShips=${JSON.stringify(boardInShips)}`);
      const vkey = JSON.parse(fs.readFileSync('public/zk/shot_verification_key.json', 'utf-8'));
      //console.log(`vkey=${JSON.stringify(vkey)}`);
      try {
        let { hashArr, proofArr} = await GenShotProofByShotAndBinaries(boardInShips, 8, 4, false, 'public/zk/shot_js/shot.wasm', 'public/zk/zkey/shot_final.zkey', vkey);
      } catch (err) {
        console.log(`err=${JSON.stringify(err)}`);
        return;
      }
      expect('should not reach here').toBeNull();
    });
});
