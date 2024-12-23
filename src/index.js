// import { Ship } from '../src/ship'
// import { Gameboard } from '../src/gameboard'
// import { Player } from '../src/player'


//Aircraft carrier	length: 5
//Battleship length: 4
//Submarine length: 3
//Destroyer legth: 3
//Patrol boat lenght: 2

const playerBoard = document.querySelector('.player-board')
const computerBoard = document.querySelector('.computer-board')
const modalBoard = document.querySelector('.my-waters')


function displayBoards() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const playerCard = document.createElement('div')
            const computerCard = document.createElement('div')
            const modalCard = document.createElement('div')
            playerCard.classList.add('player-card')
            computerCard.classList.add('computer-card')
            modalCard.classList.add('modal-card')

            playerBoard.appendChild(playerCard)
            computerBoard.appendChild(computerCard)
            modalBoard.appendChild(modalCard)
        }
    }
}

displayBoards()

// let newX = 0, newY = 0, startX = 0, startY = 0

// playerBoard.addEventListener('mousedown', mouseDown)

// function mouseDown(e) {
//     startX = e.clientX
//     startY = e.clientY

//     document.addEventListener('mousemove', mouseMove)
//     document.addEventListener('mouseup', mouseUp)
// }

// function mouseMove(e) {
//     newX = startX - e.clientX
//     newY = startY - e.clientY

//     startX = e.clientX
//     startY = e.clientY

//     aircraft.style.top = (aircraft.offsetTop - newX) + 'px'
//     aircraft.style.left = (aircraft.offsetLeft - newY) + 'px'
// }

// function mouseUp(e) {
//   document.removeEventListener('mousemove', mouseMove)
// }

// aircraft.addEventListener('dragstart', dragStart)

// let modalCells = document.querySelectorAll('.modal-card')
// modalCells.forEach(cell => {
//     cell.addEventListener('dragover', (e) => {
//         e.preventDefault
//         cell.style.backgroundColor = 'red'
//     })
// })
// let draggedShip

// function dragStart(e) {
//     draggedShip = e.target
// }



