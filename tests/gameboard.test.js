import Gameboard from '../src/gameboard'
import Ship from '../src/ship'

const aircraft = new Ship(0, 5)
const battleship = new Ship(0, 4)
const ships = [aircraft, battleship]

const playerBoard = new Gameboard(ships)

it ('GameBoard createGameBoard creates the board', () => {
    playerBoard.createGameBoard()
    expect(playerBoard.board).toBe()
})