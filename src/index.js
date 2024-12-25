import Ship from '../src/ship'
import Gameboard from '../src/gameboard'
import Player from '../src/player'

//create the ships objects for human player
let aircraft = new Ship(0, 5)
let battleship = new Ship(1, 4)
let submarine = new Ship(2, 3)
let destroyer = new Ship(3, 3)
let cruiser = new Ship(4, 2)

//create the ships objects for computer player
let aircraftComp = new Ship(0, 5)
let battleshipComp = new Ship(1, 4)
let submarineComp = new Ship(2, 3)
let destroyerComp = new Ship(3, 3)
let cruiserComp = new Ship(4, 2)

//add all the ships to the queue
let shipsComp = [aircraftComp, battleshipComp, submarineComp, destroyerComp, cruiserComp]
let ships = [aircraft, battleship, submarine, destroyer, cruiser]

//create the player board and the computer board objects
let PlayerBoard = new Gameboard()
PlayerBoard.createGameBoard()
let ComputerBoard = new Gameboard()
ComputerBoard.createGameBoard()

//create the player and the computer player objects
let player = new Player(PlayerBoard)
let computer = new Player(ComputerBoard)

const playerBoard = document.querySelector('.player-board ')
const computerBoard = document.querySelector('.computer-board')
const modalBoard = document.querySelector('.my-waters')

//get the ships DOM objects
const aircraftDom = document.querySelector('.aircraft')
const battleshipDom = document.querySelector('.battleship')
const submarineDom = document.querySelector('.submarine')
const destroyerDom = document.querySelector('.destroyer')
const patrolBoatDom = document.querySelector('.patrol-boat')

const shipsDom = [aircraftDom, battleshipDom, submarineDom, destroyerDom, patrolBoatDom]

function displayComputerBoard() {
    for (let i = 0; i < ComputerBoard.board.length; i++) {
        const computerCard = document.createElement('div')
        computerCard.classList.add('computer-card')
        computerCard.id = i
        if (ComputerBoard.board[i].shipId !== null) {
            computerCard.classList.add('ship-card')
        } else if (ComputerBoard.board[i].hit === true) {
            computerCard.classList.add('hit')
        } else if (ComputerBoard.board[i].missedAttack === true) {
            computerCard.classList.add('missed-Attack')
        }
        computerBoard.appendChild(computerCard)
    }
}

function displayPlayerBoard() {
    for (let i = 0; i < PlayerBoard.board.length; i++) {
        const playerCard = document.createElement('div')
        const modalCard = document.createElement('div')
        playerCard.classList.add('player-card')
        modalCard.classList.add('modal-card')
        playerCard.id = i
        modalCard.id = i
        if (PlayerBoard.board[i].shipId !== null) {
            playerCard.classList.add('ship-card')
            modalCard.classList.add('ship-card')
        } else if (PlayerBoard.board[i].hit === true) {
            playerCard.classList.add('hit')
        } else if (PlayerBoard.board[i].missedAttack === true) {
            playerCard.classList.add('missed-Attack')
        }
        playerBoard.appendChild(playerCard)
        modalBoard.appendChild(modalCard)
    }
}

displayComputerBoard()
displayPlayerBoard()

function isValidShipPlace(board, ship, startIndex) {
    let valid = true
    const upperBound = startIndex + ship.length * 1
    for (let i = startIndex; i <= upperBound; i++) {
        if (i % 10 - 1  !== (i - 1) % 10) {
            valid = false
        }
        else if (board.board[i].shipId !== null) {
            valid = false
        }
    }
    return valid
}

function domShipCells(ship, x, squares) {
    const len = ship.length
    for (let i = x; i < x + len; i++) {
        squares[i].classList.add('ship-card')
    }
}

function placeComputerShip(ship) {
    const startIndex = Math.floor(Math.random() * (100 - ship.length))
    if (!isValidShipPlace(ComputerBoard, ship, startIndex)) {
        placeComputerShip(ship)
    } else {
        ComputerBoard.placeShip(ship, startIndex)
        domShipCells(ship, startIndex, computerSquares)
    }
}

function placePlayerShip(ship, startIndex) {
    let dropped = false
    if (!isValidShipPlace(PlayerBoard, ship, startIndex)) return
    else {
        PlayerBoard.placeShip(ship, startIndex)
        domShipCells(ship, startIndex, playerSquares)
        domShipCells(ship, startIndex, modalSquares)
        dropped = true
    }
    return dropped
}

function removeDomShip(ship) {
    const index = shipsDom.indexOf(ship)
    shipsDom.splice(index, 1)
}

//drag and drop the ships onto the board
let draggedShip = null

for (let ship of shipsDom) {
    ship.addEventListener('dragstart', dragStart)
}

function dragStart(e) {
    draggedShip = e.target
}

const modalSquares = Array.from(modalBoard.children)
const playerSquares = Array.from(playerBoard.children)
const computerSquares = document.querySelectorAll('.computer-card')

function removeShipName(id) {
    const shipName = document.querySelector(`#ship-${id}`)
    shipName.remove()
}
modalSquares.forEach(square => {
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dropShip)
})

function dragOver(e) {
    e.preventDefault()
}

function dropShip(e) {
    e.preventDefault()
    const startIndex = e.target.id * 1
    const ship = ships[draggedShip.id]
    const validDrop = placePlayerShip(ship, startIndex)
    if (validDrop) {
        draggedShip.remove()
        removeDomShip(draggedShip)
        removeShipName(draggedShip.id)
    }
}

//start the game
const startButton = document.querySelector('#start')
const modal = document.querySelector('.modal')

startButton.addEventListener('click', startGame)

function allSunk(ships) {
    let res = true
    ships.forEach(ship => {
        console.log(ship.hitTimes, ship.length)
        if (ship.hitTimes < ship.length){
            res = false
        }
    })
    return res
}

function isGameOver() {
    let gameOver = {isGameOver: false, winner: null}
    if  (allSunk(ships) === true) {
        gameOver.isGameOver = true
        gameOver.winner = 'Player' 
    } else if (allSunk(shipsComp) === true) {
        gameOver.isGameOver = true
        gameOver.winner = 'Computer' 
    }
    return gameOver
}

function startGame() {
    if (shipsDom.length !== 0) return
    shipsComp.forEach(ship => placeComputerShip(ship))
    modal.classList.add('modal-hide')
    gameControler()
}

//play the game until either player loses
function gameControler() {
    let gameOver = isGameOver()
    if (!gameOver.isGameOver) {
        computerSquares.forEach(square => {
            square.addEventListener('click', () => {
                const index = square.id
                ComputerBoard.receiveAttack(shipsComp, index)
                const attackedCell = ComputerBoard.board[index]
                if (attackedCell.hit === true) {
                    square.classList.add('hit')
                } else if (attackedCell.missedAttack === true) {
                    square.classList.add('missed-Attack')
                } else {
                    return
                }
            })
        })
    } else {
        console.log(gameOver.winner)
    }
}


export default ships;