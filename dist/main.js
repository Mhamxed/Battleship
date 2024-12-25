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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Gameboard {\n    constructor() {\n        this.board = []\n    }\n\n    createGameBoard() {\n        for (let i = 0; i < 100; i++) {\n            const cell = {shipId: null, hit: false, missedAttack: false}\n            this.board[i] = cell\n        }\n        return this.board\n        }\n\n    placeShip(ship, x) {\n        const len = ship.length\n        const id = ship.id \n        const gameBoard = this.board\n        for (let i = x; i < x + len; i++) {\n            const cell = gameBoard[i]\n            cell.shipId = id\n        }\n        return gameBoard\n    }\n\n    receiveAttack(ships, x) {\n        const attackedCell = this.board[x]\n        if (attackedCell.shipId !== null && attackedCell.missedAttack === false) {\n            attackedCell.hit = true\n            const ship = ships[attackedCell.shipId]\n            ship.hit()\n        } else if (attackedCell.shipId === null && attackedCell.missedAttack === false) {\n            attackedCell.missedAttack = true\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/ship */ \"./src/ship.js\");\n/* harmony import */ var _src_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _src_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/player */ \"./src/player.js\");\n\n\n\n\n//create the ships objects for human player\nlet aircraft = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 5)\nlet battleship = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, 4)\nlet submarine = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, 3)\nlet destroyer = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 3)\nlet cruiser = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, 2)\n\n//create the ships objects for computer player\nlet aircraftComp = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 5)\nlet battleshipComp = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, 4)\nlet submarineComp = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, 3)\nlet destroyerComp = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 3)\nlet cruiserComp = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, 2)\n\n//add all the ships to the queue\nlet shipsComp = [aircraftComp, battleshipComp, submarineComp, destroyerComp, cruiserComp]\nlet ships = [aircraft, battleship, submarine, destroyer, cruiser]\n\n//create the player board and the computer board objects\nlet PlayerBoard = new _src_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\nPlayerBoard.createGameBoard()\nlet ComputerBoard = new _src_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\nComputerBoard.createGameBoard()\n\n//create the player and the computer player objects\nlet player = new _src_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](PlayerBoard)\nlet computer = new _src_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ComputerBoard)\n\nconst playerBoard = document.querySelector('.player-board ')\nconst computerBoard = document.querySelector('.computer-board')\nconst modalBoard = document.querySelector('.my-waters')\n\n//get the ships DOM objects\nconst aircraftDom = document.querySelector('.aircraft')\nconst battleshipDom = document.querySelector('.battleship')\nconst submarineDom = document.querySelector('.submarine')\nconst destroyerDom = document.querySelector('.destroyer')\nconst patrolBoatDom = document.querySelector('.patrol-boat')\n\nconst shipsDom = [aircraftDom, battleshipDom, submarineDom, destroyerDom, patrolBoatDom]\n\nfunction displayComputerBoard() {\n    for (let i = 0; i < ComputerBoard.board.length; i++) {\n        const computerCard = document.createElement('div')\n        computerCard.classList.add('computer-card')\n        computerCard.id = i\n        if (ComputerBoard.board[i].shipId !== null) {\n            computerCard.classList.add('ship-card')\n        } else if (ComputerBoard.board[i].hit === true) {\n            computerCard.classList.add('hit')\n        } else if (ComputerBoard.board[i].missedAttack === true) {\n            computerCard.classList.add('missed-Attack')\n        }\n        computerBoard.appendChild(computerCard)\n    }\n}\n\nfunction displayPlayerBoard() {\n    for (let i = 0; i < PlayerBoard.board.length; i++) {\n        const playerCard = document.createElement('div')\n        const modalCard = document.createElement('div')\n        playerCard.classList.add('player-card')\n        modalCard.classList.add('modal-card')\n        playerCard.id = i\n        modalCard.id = i\n        if (PlayerBoard.board[i].shipId !== null) {\n            playerCard.classList.add('ship-card')\n            modalCard.classList.add('ship-card')\n        } else if (PlayerBoard.board[i].hit === true) {\n            playerCard.classList.add('hit')\n        } else if (PlayerBoard.board[i].missedAttack === true) {\n            playerCard.classList.add('missed-Attack')\n        }\n        playerBoard.appendChild(playerCard)\n        modalBoard.appendChild(modalCard)\n    }\n}\n\ndisplayComputerBoard()\ndisplayPlayerBoard()\n\nfunction isValidShipPlace(board, ship, startIndex) {\n    let valid = true\n    const upperBound = startIndex + ship.length * 1\n    for (let i = startIndex; i <= upperBound; i++) {\n        if (i % 10 - 1  !== (i - 1) % 10) {\n            valid = false\n        }\n        else if (board.board[i].shipId !== null) {\n            valid = false\n        }\n    }\n    return valid\n}\n\nfunction domShipCells(ship, x, squares) {\n    const len = ship.length\n    for (let i = x; i < x + len; i++) {\n        squares[i].classList.add('ship-card')\n    }\n}\n\nfunction placeComputerShip(ship) {\n    const startIndex = Math.floor(Math.random() * (100 - ship.length))\n    if (!isValidShipPlace(ComputerBoard, ship, startIndex)) {\n        placeComputerShip(ship)\n    } else {\n        ComputerBoard.placeShip(ship, startIndex)\n        domShipCells(ship, startIndex, computerSquares)\n    }\n}\n\nfunction placePlayerShip(ship, startIndex) {\n    let dropped = false\n    if (!isValidShipPlace(PlayerBoard, ship, startIndex)) return\n    else {\n        PlayerBoard.placeShip(ship, startIndex)\n        domShipCells(ship, startIndex, playerSquares)\n        domShipCells(ship, startIndex, modalSquares)\n        dropped = true\n    }\n    return dropped\n}\n\nfunction removeDomShip(ship) {\n    const index = shipsDom.indexOf(ship)\n    shipsDom.splice(index, 1)\n}\n\n//drag and drop the ships onto the board\nlet draggedShip = null\n\nfor (let ship of shipsDom) {\n    ship.addEventListener('dragstart', dragStart)\n}\n\nfunction dragStart(e) {\n    draggedShip = e.target\n}\n\nconst modalSquares = Array.from(modalBoard.children)\nconst playerSquares = Array.from(playerBoard.children)\nconst computerSquares = document.querySelectorAll('.computer-card')\n\nfunction removeShipName(id) {\n    const shipName = document.querySelector(`#ship-${id}`)\n    shipName.remove()\n}\nmodalSquares.forEach(square => {\n    square.addEventListener('dragover', dragOver)\n    square.addEventListener('drop', dropShip)\n})\n\nfunction dragOver(e) {\n    e.preventDefault()\n}\n\nfunction dropShip(e) {\n    e.preventDefault()\n    const startIndex = e.target.id * 1\n    const ship = ships[draggedShip.id]\n    const validDrop = placePlayerShip(ship, startIndex)\n    if (validDrop) {\n        draggedShip.remove()\n        removeDomShip(draggedShip)\n        removeShipName(draggedShip.id)\n    }\n}\n\n//start the game\nconst startButton = document.querySelector('#start')\nconst modal = document.querySelector('.modal')\n\nstartButton.addEventListener('click', startGame)\n\nfunction allSunk(ships) {\n    let res = true\n    ships.forEach(ship => {\n        console.log(ship.hitTimes, ship.length)\n        if (ship.hitTimes < ship.length){\n            res = false\n        }\n    })\n    return res\n}\n\nfunction isGameOver() {\n    let gameOver = {isGameOver: false, winner: null}\n    if  (allSunk(ships) === true) {\n        gameOver.isGameOver = true\n        gameOver.winner = 'Player' \n    } else if (allSunk(shipsComp) === true) {\n        gameOver.isGameOver = true\n        gameOver.winner = 'Computer' \n    }\n    return gameOver\n}\n\nfunction startGame() {\n    if (shipsDom.length !== 0) return\n    shipsComp.forEach(ship => placeComputerShip(ship))\n    modal.classList.add('modal-hide')\n    gameControler()\n}\n\n//play the game until either player loses\nfunction gameControler() {\n    let gameOver = isGameOver()\n    if (!gameOver.isGameOver) {\n        computerSquares.forEach(square => {\n            square.addEventListener('click', () => {\n                const index = square.id\n                ComputerBoard.receiveAttack(shipsComp, index)\n                const attackedCell = ComputerBoard.board[index]\n                if (attackedCell.hit === true) {\n                    square.classList.add('hit')\n                } else if (attackedCell.missedAttack === true) {\n                    square.classList.add('missed-Attack')\n                } else {\n                    return\n                }\n            })\n        })\n    } else {\n        console.log(gameOver.winner)\n    }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ships);\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n    constructor(id, length) {\n        this.id = id\n        this.length = length\n        this.hitTimes = 0\n    }\n\n    hit() {\n        this.hitTimes++\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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