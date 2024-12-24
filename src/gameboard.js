import { Ship } from './ship'

class Gameboard {
    constructor() {
        this.board = []
    }

    createGameBoard() {
        for (let i = 0; i < 100; i++) {
            const cell = {shipName: null, hit: false, missedAttack: false}
            this.board[i] = cell
        }
        return this.board
        }

    placeShip(ship, x) {
        const len = ship.length
        const name = ship.name 
        const gameBoard = this.board
        for (let i = x; i < x + len; i++) {
            const cell = gameBoard[i]
            cell.shipName = name
        }
        return gameBoard
    }

    receiveAttack(x) {
        const attackedCell = this.board[x]
        if (attackedCell.shipName && attackedCell.missedAttack === false) {
            attackedCell.hit = true
            attackedCell.shipName.hit()
        } else if (!attackedCell.shipName && attackedCell.missedAttack === false) {
            attackedCell.missedAttack = true
        }
    }

    areAllShipsSunk() {
        let sunk = true
        for (let i = 0; i < 100; i++) {
            const cell = this.board[i]
            if (cell.shipName && cell.hit === false) {
                sunk = false
            }
        }
        return sunk
    }
}

export default Gameboard;