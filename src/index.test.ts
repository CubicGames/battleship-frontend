import {describe, expect, test} from '@jest/globals';
import { GenBoardProofByBoardAndBinaries } from './index';
import { GenerateBoardConfig } from './board';
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
    test('Should enerate board proof ok, a failing case', async () => {
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
});
