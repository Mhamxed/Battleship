class Gameboard {
    constructor(ships) {
        this.ships = ships
        this.board = []
    }

    createGameBoard() {
        for (let i = 0; i < 100; i++) {
            const cell = {shipId: null, hit: false, missedAttack: false}
            this.board[i] = cell
        }
        return this.board
        }

    placeShip(ship, x) {
        const len = ship.length
        const id = ship.id 
        const gameBoard = this.board
        for (let i = x; i < x + len; i++) {
            const cell = gameBoard[i]
            cell.shipId = id
        }
        return gameBoard
    }

    receiveAttack(x) {
        let successAttack = false
        const attackedCell = this.board[x]
        if (attackedCell.shipId !== null && attackedCell.missedAttack === false && attackedCell.hit === false) {
            attackedCell.hit = true
            const ship = this.ships[attackedCell.shipId]
            ship.hit()
            successAttack = true
        } else if (attackedCell.shipId === null && attackedCell.missedAttack === false && attackedCell.hit === false) {
            attackedCell.missedAttack = true
            successAttack = true
        }
        return successAttack
    } 
    areAllSunk() {
        return this.ships.every(ship => ship.isSunk())
    }
}

export default Gameboard;