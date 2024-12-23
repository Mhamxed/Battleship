import { Ship } from './ship'

class Gameboard {
    constructor() {
        this.board = []
    }

    createGameBoard() {
        for (let i = 0; i < 10; i++) {
            const row = this.board[i]
            row = []
            for (let j = 0; j < 10; j++) {
                const cell = {shipName: null, hit: false, missedAttack: false}
                this.board[i][j] = cell
                row.push(cell)
            }
            this.board.push(row)
        }
        return this.board
    }

    placeShip(ship, x, y) {
        const len = ship.length
        const name = ship.name 
        const gameBoard = this.board
        for (let i = x; i <= len; i++) {
            const cell = gameBoard[x][y]
            cell.shipName = name
        }
        return gameBoard
    }

    receiveAttack(x, y) {
        const attackedCell = this.board[x][y]
        if (attackedCell.shipName && attackedCell.missedAttack === false) {
            attackedCell.hit = true
            attackedCell.shipName.hit()
        } else if (!attackedCell.shipName && attackedCell.missedAttack === false) {
            attackedCell.missedAttack = true
        }
    }

    areAllShipsSunk() {
        let sunk = true
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = this.board[i][j]
                if (cell.shipName && cell.hit === false) {
                    sunk = false
                }
            }
        }
        return sunk
    }
}

export default Gameboard;