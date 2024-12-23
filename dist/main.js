/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import { Ship } from '../src/ship'\n// import { Gameboard } from '../src/gameboard'\n// import { Player } from '../src/player'\n\n\n//Aircraft carrier\tlength: 5\n//Battleship length: 4\n//Submarine length: 3\n//Destroyer legth: 3\n//Patrol boat lenght: 2\n\nconst playerBoard = document.querySelector('.player-board')\nconst computerBoard = document.querySelector('.computer-board')\nconst modalBoard = document.querySelector('.my-waters')\n\n\nfunction displayBoards() {\n    for (let i = 0; i < 10; i++) {\n        for (let j = 0; j < 10; j++) {\n            const playerCard = document.createElement('div')\n            const computerCard = document.createElement('div')\n            const modalCard = document.createElement('div')\n            playerCard.classList.add('player-card')\n            computerCard.classList.add('computer-card')\n            modalCard.classList.add('modal-card')\n\n            playerBoard.appendChild(playerCard)\n            computerBoard.appendChild(computerCard)\n            modalBoard.appendChild(modalCard)\n        }\n    }\n}\n\ndisplayBoards()\n\n// let newX = 0, newY = 0, startX = 0, startY = 0\n\n// playerBoard.addEventListener('mousedown', mouseDown)\n\n// function mouseDown(e) {\n//     startX = e.clientX\n//     startY = e.clientY\n\n//     document.addEventListener('mousemove', mouseMove)\n//     document.addEventListener('mouseup', mouseUp)\n// }\n\n// function mouseMove(e) {\n//     newX = startX - e.clientX\n//     newY = startY - e.clientY\n\n//     startX = e.clientX\n//     startY = e.clientY\n\n//     aircraft.style.top = (aircraft.offsetTop - newX) + 'px'\n//     aircraft.style.left = (aircraft.offsetLeft - newY) + 'px'\n// }\n\n// function mouseUp(e) {\n//   document.removeEventListener('mousemove', mouseMove)\n// }\n\n// aircraft.addEventListener('dragstart', dragStart)\n\n// let modalCells = document.querySelectorAll('.modal-card')\n// modalCells.forEach(cell => {\n//     cell.addEventListener('dragover', (e) => {\n//         e.preventDefault\n//         cell.style.backgroundColor = 'red'\n//     })\n// })\n// let draggedShip\n\n// function dragStart(e) {\n//     draggedShip = e.target\n// }\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;