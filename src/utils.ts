export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function formatAddress(
  address: string | null | undefined,
  ensName: string | null | undefined,
  chars = 4
): string {
  if (ensName) return ensName;
  else if (address)
    return `${address
      .substring(0, chars + 2)
      .toLowerCase()}...${address.substring(42 - chars)}`;
  else return '';
}

export function getMethods (obj: any) {
  let properties = new Set()
  let currentObj = obj
  do {
    Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
  } while ((currentObj = Object.getPrototypeOf(currentObj)))
  return [...properties.keys()].filter((item: any) => typeof obj[item] === 'function')
}

export function dummyGetBoardHash(board:string[][]) {
    var hash = 0;

    if (board.length == 0) return hash;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        let c = (board[i][j].charCodeAt(0) + i + j ) % 128;
        hash = ((hash << 5) - hash) + c;
        hash = hash & hash;
      }
    }

    return hash;
}
