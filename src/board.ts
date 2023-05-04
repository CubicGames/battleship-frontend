function GenerateBoardConfig() {
	let emptySpot = ''
	let dim = 10
	let board: string[][] = []

	for (let i = 0; i < dim; i++) {
		board[i] = new Array(dim)
	}

	for (let i = 0; i < 10; i++) {
	  for (let j = 0; j < 10; j++) {
	    board[i][j] = emptySpot
	  }
	}

	const FindShip = (shipLen: number) => {
	let x:number
	let y:number
	let z:number
	let result:any
	do {
		// Returns a random integer from 0 to 9:
		let x = Math.floor(Math.random() * 10);
		let y = Math.floor(Math.random() * 10);
		let z = Math.floor(Math.random() * 2);

		if (z == 0) {
			let i = 0;
			for (i = 0; i < shipLen; i++) {
				if (x + i >= dim || board[x+i][y] != emptySpot) {
					break
				}
			}
			if (i == shipLen) {
				for (let i = 0; i < shipLen; i++) {
					board[x+i][y] = 'O'
				}
				result = [x, y, z]
				break
			}
		} else {
			let i = 0;
			for (i = 0; i < shipLen; i++) {
				if (y + i >= dim || board[x][y+i] != emptySpot) {
					break
				}
			}
			if (i == shipLen) {
				for (let i = 0; i < shipLen; i++) {
					board[x][y+i] = 'O'
				}
				result = [x, y, z]
				break
			}
		}
	} while (true)

	return result.map((n:number) => n.toString())
	}

	let boardInShips = [
		FindShip(5),
		FindShip(4),
		FindShip(3),
		FindShip(3),
		FindShip(2),
	]

	return {board, boardInShips}
}

export {
	GenerateBoardConfig
}
/*
let {board, boardInShips} = GenerateBoardConfig()
for (let i = 0; i < 10; i++) {
    console.log(JSON.stringify(board[i]))
}
console.log(boardInShips)
*/
