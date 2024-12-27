import Gameboard from '../src/gameboard'
import Ship from '../src/ship'

const aircraft = new Ship(0, 5)
const battleship = new Ship(1, 4)
const ships = [aircraft, battleship]

const playerBoard = new Gameboard(ships)
playerBoard.ships = ships

it ('createGameBoard creates the board', () => {
    playerBoard.createGameBoard()
    expect(playerBoard.board[0]).toStrictEqual({shipId: null, hit: false, missedAttack: false})
    expect(playerBoard.board[89]).toStrictEqual({shipId: null, hit: false, missedAttack: false})
    expect(playerBoard.board[19]).toStrictEqual({shipId: null, hit: false, missedAttack: false})
})

it ('placeShip(ship, x) places a given ship on the board starting at x until ship.length', () => {
    playerBoard.placeShip(aircraft, 9)
    expect(playerBoard.board[9]).toStrictEqual({shipId: 0, hit: false, missedAttack: false})
    expect(playerBoard.board[10]).toStrictEqual({shipId: 0, hit: false, missedAttack: false})
    expect(playerBoard.board[11]).toStrictEqual({shipId: 0, hit: false, missedAttack: false})
    expect(playerBoard.board[12]).toStrictEqual({shipId: 0, hit: false, missedAttack: false})
    expect(playerBoard.board[13]).toStrictEqual({shipId: 0, hit: false, missedAttack: false})
})

it ('receiveAttack(x) emulates an attack received from the enemy on a the player gameBoard and changes the cell if the attack has hit a ship or if it\' missed attack', () => {
    playerBoard.placeShip(aircraft, 9)
    playerBoard.receiveAttack(9)
    playerBoard.receiveAttack(8)
    expect(playerBoard.board[9]).toStrictEqual({shipId: 0, hit: true, missedAttack: false})
    expect(playerBoard.board[8]).toStrictEqual({shipId: null, hit: false, missedAttack: true})
})

it ('areAllSunk fucntion return false if one of the ships on the gameboard has not been sunk yet', () => {
    playerBoard.placeShip(aircraft, 23)
    playerBoard.placeShip(battleship, 70)
    playerBoard.receiveAttack(23)
    playerBoard.receiveAttack(24)
    playerBoard.receiveAttack(25)
    playerBoard.receiveAttack(26)
    playerBoard.receiveAttack(27)
    playerBoard.receiveAttack(71)
    playerBoard.receiveAttack(72)
    expect(playerBoard.areAllSunk()).toBe(false)
})

it ('areAllSunk fucntion return true if all the ships on the gameboard has been sunk', () => {
    playerBoard.placeShip(aircraft, 78)
    playerBoard.placeShip(battleship, 10)
    playerBoard.receiveAttack(78)
    playerBoard.receiveAttack(79)
    playerBoard.receiveAttack(80)
    playerBoard.receiveAttack(81)
    playerBoard.receiveAttack(82)
    playerBoard.receiveAttack(10)
    playerBoard.receiveAttack(11)
    playerBoard.receiveAttack(12)
    playerBoard.receiveAttack(13)
    expect(playerBoard.areAllSunk()).toBe(true)
})