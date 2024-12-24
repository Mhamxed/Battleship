/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass Gameboard {\n    constructor() {\n        this.board = []\n    }\n\n    createGameBoard() {\n        for (let i = 0; i < 100; i++) {\n            const cell = {shipName: null, hit: false, missedAttack: false}\n            this.board[i] = cell\n        }\n        return this.board\n        }\n\n    placeShip(ship, x) {\n        const len = ship.length\n        const name = ship.name \n        const gameBoard = this.board\n        for (let i = x; i < x + len; i++) {\n            const cell = gameBoard[i]\n            cell.shipName = name\n        }\n        return gameBoard\n    }\n\n    receiveAttack(x) {\n        const attackedCell = this.board[x]\n        if (attackedCell.shipName && attackedCell.missedAttack === false) {\n            attackedCell.hit = true\n            attackedCell.shipName.hit()\n        } else if (!attackedCell.shipName && attackedCell.missedAttack === false) {\n            attackedCell.missedAttack = true\n        }\n    }\n\n    areAllShipsSunk() {\n        let sunk = true\n        for (let i = 0; i < 100; i++) {\n            const cell = this.board[i]\n            if (cell.shipName && cell.hit === false) {\n                sunk = false\n            }\n        }\n        return sunk\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/ship */ \"./src/ship.js\");\n/* harmony import */ var _src_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _src_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/player */ \"./src/player.js\");\n\n\n\n\n//create the ships objects \nlet aircraft = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Aircraft carrier', 5, 0, false)\nlet battleship = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Battleship', 4, 0, false)\nlet submarine = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Submarine', 3, 0, false)\nlet destroyer = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Destroyer', 3, 0, false)\nlet patrolBoat = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Patrol boat', 2, 0, false)\n\n//add all the ships to the queue\n let ships = [aircraft, battleship, submarine, destroyer, patrolBoat]\n\n//create the player board and the computer board objects\nlet PlayerBoard = new _src_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\nPlayerBoard.createGameBoard()\nlet ComputerBoard = new _src_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\nComputerBoard.createGameBoard()\n\n//create the player and the computer player objects\nlet player = new _src_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](PlayerBoard)\nlet computer = new _src_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ComputerBoard)\n\nconst playerBoard = document.querySelector('.player-board')\nconst computerBoard = document.querySelector('.computer-board')\nconst modalBoard = document.querySelector('.my-waters')\n\n//get the ships DOM objects\nconst aircraftDom = document.querySelector('.aircraft')\nconst battleshipDom = document.querySelector('.battleship')\nconst submarineDom = document.querySelector('.submarine')\nconst destroyerDom = document.querySelector('.destroyer')\nconst patrolBoatDom = document.querySelector('.patrol-boat')\n\nconst shipsDom = [aircraftDom, battleshipDom, submarineDom, destroyerDom, patrolBoatDom]\n\nfunction displayComputerBoard() {\n    for (let i = 0; i < ComputerBoard.board.length; i++) {\n        const computerCard = document.createElement('div')\n        computerCard.classList.add('computer-card')\n        computerCard.id = i\n        if (ComputerBoard.board[i].shipName !== null) {\n            computerCard.classList.add('ship-card')\n        } else if (ComputerBoard.board[i].hit === true) {\n            computerCard.classList.add('hit')\n        } else if (ComputerBoard.board[i].missedAttack === true) {\n            computerCard.classList.add('missed-Attack')\n        }\n        computerBoard.appendChild(computerCard)\n    }\n}\n\nfunction displayPlayerBoard() {\n    for (let i = 0; i < PlayerBoard.board.length; i++) {\n        const playerCard = document.createElement('div')\n        const modalCard = document.createElement('div')\n        playerCard.classList.add('player-card')\n        modalCard.classList.add('modal-card')\n        playerCard.id = i\n        modalCard.id = i\n        if (PlayerBoard.board[i].shipName !== null) {\n            playerCard.classList.add('ship-card')\n            modalCard.classList.add('ship-card')\n        } else if (PlayerBoard.board[i].hit === true) {\n            playerCard.classList.add('hit')\n        } else if (PlayerBoard.board[i].missedAttack === true) {\n            playerCard.classList.add('missed-Attack')\n        }\n        playerBoard.appendChild(playerCard)\n        modalBoard.appendChild(modalCard)\n    }\n}\n\nfunction removeComputerSquares() {\n    let computerSquares = document.querySelectorAll('.computer-card')\n    computerSquares.forEach(square => computerBoard.removeChild(square))\n}\n\ndisplayComputerBoard()\ndisplayPlayerBoard()\n\nfunction isValidShipPlace(board, ship, startIndex) {\n    let valid = true\n    const upperBound = startIndex + ship.length * 1\n    for (let i = startIndex; i <= upperBound; i++) {\n        if (i % 10 - 1  !== (i - 1) % 10) {\n            valid = false\n        }\n        else if (board.board[i].shipName !== null) {\n            valid = false\n        }\n    }\n    return valid\n}\n\nfunction DomPlayerShipCells(ship, x, Squares) {\n    const len = ship.length\n    for (let i = x; i < x + len; i++) {\n        modalSquares[i].classList.add('ship-card')\n        playerSquares[i].classList.add('ship-card')\n    }\n}\n\nfunction placeComputerShip(ship) {\n    const startIndex = Math.floor(Math.random() * (100 - ship.length))\n    if (!isValidShipPlace(ComputerBoard, ship, startIndex)) {\n        placeComputerShip(ship)\n    } else {\n        ComputerBoard.placeShip(ship, startIndex)\n        removeComputerSquares()\n        displayComputerBoard()\n    }\n}\n\nfunction placePlayerShip(ship, startIndex) {\n    PlayerBoard.placeShip(ship, startIndex)\n    DomPlayerShipCells(ship, startIndex)\n}\n\nships.forEach(ship => placeComputerShip(ship))\n\n//drag and drop the ships onto the board\nlet draggedShip = null\n\nfor (let ship of shipsDom) {\n    ship.addEventListener('dragstart', dragStart)\n}\n\nfunction dragStart(e) {\n    draggedShip = e.target\n}\n\nconst modalSquares = Array.from(modalBoard.children)\nconst playerSquares = Array.from(playerBoard.children)\n\nmodalSquares.forEach(square => {\n    square.addEventListener('dragover', dragOver)\n    square.addEventListener('drop', dropShip)\n})\n\nfunction dragOver(e) {\n    e.preventDefault()\n}\n\nfunction dropShip(e) {\n    e.preventDefault()\n    const startIndex = e.target.id * 1\n    const ship = ships[draggedShip.id]\n    placePlayerShip(ship, startIndex)\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nclass Player {\n    constructor(gameboard) {\n        this.gameboard = gameboard\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n    constructor(name, length, hitTimes, isSunk) {\n        this.name = name\n        this.length = length\n        this.hitTimes = hitTimes\n        this.isSunk = isSunk\n    }\n\n    hit() {\n        this.hitTimes =+ 1\n    }\n\n    isSunk() {\n        if (this.hitTimes >= this.length) {\n            return true\n        } else {\n            return false\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;