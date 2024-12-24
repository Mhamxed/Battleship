import Ship from '../src/ship'
import Gameboard from '../src/gameboard'
import Player from '../src/player'

//create the ships objects 
let aircraft = new Ship('Aircraft carrier', 5, 0, false)
let battleship = new Ship('Battleship', 4, 0, false)
let submarine = new Ship('Submarine', 3, 0, false)
let destroyer = new Ship('Destroyer', 3, 0, false)
let patrolBoat = new Ship('Patrol boat', 2, 0, false)

//add all the ships to the queue
 let ships = [aircraft, battleship, submarine, destroyer, patrolBoat]

//create the player board and the computer board objects
let PlayerBoard = new Gameboard()
PlayerBoard.createGameBoard()
let ComputerBoard = new Gameboard()
ComputerBoard.createGameBoard()

//create the player and the computer player objects
let player = new Player(PlayerBoard)
let computer = new Player(ComputerBoard)

const playerBoard = document.querySelector('.player-board')
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
        if (ComputerBoard.board[i].shipName !== null) {
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
        if (PlayerBoard.board[i].shipName !== null) {
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

function removeComputerSquares() {
    let computerSquares = document.querySelectorAll('.computer-card')
    computerSquares.forEach(square => computerBoard.removeChild(square))
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
        else if (board.board[i].shipName !== null) {
            valid = false
        }
    }
    return valid
}

function DomPlayerShipCells(ship, x, Squares) {
    const len = ship.length
    for (let i = x; i < x + len; i++) {
        modalSquares[i].classList.add('ship-card')
        playerSquares[i].classList.add('ship-card')
    }
}

function placeComputerShip(ship) {
    const startIndex = Math.floor(Math.random() * (100 - ship.length))
    if (!isValidShipPlace(ComputerBoard, ship, startIndex)) {
        placeComputerShip(ship)
    } else {
        ComputerBoard.placeShip(ship, startIndex)
        removeComputerSquares()
        displayComputerBoard()
    }
}

function placePlayerShip(ship, startIndex) {
    PlayerBoard.placeShip(ship, startIndex)
    DomPlayerShipCells(ship, startIndex)
}

ships.forEach(ship => placeComputerShip(ship))

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
    placePlayerShip(ship, startIndex)
}

