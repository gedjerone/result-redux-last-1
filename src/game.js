const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

export const checkWinner = (tiles) => {
    let winner = ""
    winnerLines.map(([x, y, z]) => {
        if (tiles[x] !== "" && tiles[x] === tiles[y] && tiles[y] === tiles[z]) {
            winner = tiles[x]
        }
    })
    if(tiles.every(e => !!e === true) && !winner) return "Draw"
    return winner
}

export const checkPlayer = (player) => {
    return player ? "X" : "O"
}