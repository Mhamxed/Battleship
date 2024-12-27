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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Gameboard {\n    constructor(ships) {\n        this.ships = ships\n        this.board = []\n    }\n\n    createGameBoard() {\n        for (let i = 0; i < 100; i++) {\n            const cell = {shipId: null, hit: false, missedAttack: false}\n            this.board[i] = cell\n        }\n        return this.board\n        }\n\n    placeShip(ship, x) {\n        const len = ship.length\n        const id = ship.id \n        const gameBoard = this.board\n        for (let i = x; i < x + len; i++) {\n            const cell = gameBoard[i]\n            cell.shipId = id\n        }\n        return gameBoard\n    }\n\n    receiveAttack(x) {\n        const attackedCell = this.board[x]\n        if (attackedCell.shipId !== null && attackedCell.missedAttack === false) {\n            attackedCell.hit = true\n            const ship = this.ships[attackedCell.shipId]\n            ship.hit()\n        } else if (attackedCell.shipId === null && attackedCell.missedAttack === false) {\n            attackedCell.missedAttack = true\n        }\n    } \n    areAllSunk() {\n        return this.ships.every(ship => ship.isSunk())\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/ship */ \"./src/ship.js\");\n/* harmony import */ var _src_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/gameboard */ \"./src/gameboard.js\");\n\n\n\n//create the ships objects for human player\nlet aircraft = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 5)\nlet battleship = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, 4)\nlet submarine = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, 3)\nlet destroyer = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 3)\nlet cruiser = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, 2)\n\n//create the ships objects for computer player\nlet aircraftComp = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 5)\nlet battleshipComp = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, 4)\nlet submarineComp = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, 3)\nlet destroyerComp = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 3)\nlet cruiserComp = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, 2)\n\n//add all the ships to the queue\nlet shipsComp = [aircraftComp, battleshipComp, submarineComp, destroyerComp, cruiserComp]\nlet ships = [aircraft, battleship, submarine, destroyer, cruiser]\n\n//create the player board and the computer board objects\nlet PlayerBoard = new _src_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ships)\nPlayerBoard.createGameBoard()\nlet ComputerBoard = new _src_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](shipsComp)\nComputerBoard.createGameBoard()\n\nconst header = document.querySelector('.header')\nconst main = document.querySelector('.main')\n\nconst playerBoard = document.querySelector('.player-board ')\nconst computerBoard = document.querySelector('.computer-board')\nconst modalBoard = document.querySelector('.my-waters')\n\n//get the ships DOM objects\nconst aircraftDom = document.querySelector('.aircraft')\nconst battleshipDom = document.querySelector('.battleship')\nconst submarineDom = document.querySelector('.submarine')\nconst destroyerDom = document.querySelector('.destroyer')\nconst patrolBoatDom = document.querySelector('.patrol-boat')\n\nconst shipsDom = [aircraftDom, battleshipDom, submarineDom, destroyerDom, patrolBoatDom]\n\nfunction displayComputerBoard() {\n    for (let i = 0; i < ComputerBoard.board.length; i++) {\n        const computerCard = document.createElement('div')\n        computerCard.classList.add('computer-card')\n        computerCard.id = i\n        if (ComputerBoard.board[i].shipId !== null) {\n            computerCard.classList.add('ship-card')\n        } else if (ComputerBoard.board[i].hit === true) {\n            computerCard.classList.add('hit')\n        } else if (ComputerBoard.board[i].missedAttack === true) {\n            computerCard.classList.add('missed-Attack')\n        }\n        computerBoard.appendChild(computerCard)\n    }\n}\n\nfunction displayPlayerBoard() {\n    for (let i = 0; i < PlayerBoard.board.length; i++) {\n        const playerCard = document.createElement('div')\n        const modalCard = document.createElement('div')\n        playerCard.classList.add('player-card')\n        modalCard.classList.add('modal-card')\n        playerCard.id = i\n        modalCard.id = i\n        if (PlayerBoard.board[i].shipId !== null) {\n            playerCard.classList.add('ship-card')\n            modalCard.classList.add('ship-card')\n        } else if (PlayerBoard.board[i].hit === true) {\n            playerCard.classList.add('hit')\n        } else if (PlayerBoard.board[i].missedAttack === true) {\n            playerCard.classList.add('missed-Attack')\n        }\n        playerBoard.appendChild(playerCard)\n        modalBoard.appendChild(modalCard)\n    }\n}\n\nfunction initGame() {\n    displayComputerBoard()\n    displayPlayerBoard()\n    header.classList.add('blur')\n    main.classList.add('blur')\n}\n\n//initialise the game\ninitGame()\n\nfunction isValidShipPlace(board, ship, startIndex) {\n    let valid = true\n    const upperBound = startIndex + ship.length * 1\n    for (let i = startIndex; i < upperBound; i++) {\n        if (i % 10 - 1  !== (i - 1) % 10) {\n            valid = false\n        }\n        else if (board.board[i].shipId !== null) {\n            valid = false\n        }\n    }\n    return valid\n}\n\nfunction domShipCells(ship, x, squares) {\n    const len = ship.length\n    for (let i = x; i < x + len; i++) {\n        if (squares == computerSquares) {\n            squares[i].classList.add('ship-card')\n            squares[i].classList.add('hide')\n        } else {\n            squares[i].classList.add('ship-card')\n        }\n    }\n}\n\nfunction placeComputerShip(ship) {\n    const startIndex = Math.floor(Math.random() * (100 - ship.length))\n    if (!isValidShipPlace(ComputerBoard, ship, startIndex)) {\n        placeComputerShip(ship)\n    } else {\n        ComputerBoard.placeShip(ship, startIndex)\n        domShipCells(ship, startIndex, computerSquares)\n    }\n}\n\nfunction placePlayerShip(ship, startIndex) {\n    let dropped = false\n    if (!isValidShipPlace(PlayerBoard, ship, startIndex)) return\n    else {\n        PlayerBoard.placeShip(ship, startIndex)\n        domShipCells(ship, startIndex, playerSquares)\n        domShipCells(ship, startIndex, modalSquares)\n        dropped = true\n    }\n    return dropped\n}\n\nfunction removeDomShip(ship) {\n    const index = shipsDom.indexOf(ship)\n    shipsDom.splice(index, 1)\n}\n\n//drag and drop the ships onto the board\nlet draggedShip = null\n\nfor (let ship of shipsDom) {\n    ship.addEventListener('dragstart', dragStart)\n}\n\nfunction dragStart(e) {\n    draggedShip = e.target\n}\n\nconst modalSquares = Array.from(modalBoard.children)\nconst playerSquares = Array.from(playerBoard.children)\nconst computerSquares = document.querySelectorAll('.computer-card')\n\nfunction removeShipName(id) {\n    const shipName = document.querySelector(`#ship-${id}`)\n    shipName.remove()\n}\nmodalSquares.forEach(square => {\n    square.addEventListener('dragover', dragOver)\n    square.addEventListener('drop', dropShip)\n})\n\nfunction dragOver(e) {\n    e.preventDefault()\n}\n\nfunction dropShip(e) {\n    e.preventDefault()\n    const startIndex = e.target.id * 1\n    const ship = ships[draggedShip.id]\n    const validDrop = placePlayerShip(ship, startIndex)\n    if (validDrop) {\n        draggedShip.remove()\n        removeDomShip(draggedShip)\n        removeShipName(draggedShip.id)\n    }\n}\n\n//start the game\nconst startButton = document.querySelector('#start')\nconst modal = document.querySelector('.modal')\nstartButton.addEventListener('click', startGame)\n\n//get a random square for computer player to click on\nfunction shuffleSquares(arr) {\n    for (let i = arr.length - 1; i > 0; i--) {\n      const j = Math.floor(Math.random() * (i + 1));\n      [arr[i], arr[j]] = [arr[j], arr[i]];\n    }\n    return arr;\n}\n\nfunction isGameOver() {\n    let gameOver = {done: false, winner: null}\n    if (ComputerBoard.areAllSunk()) {\n        gameOver.done = true\n        gameOver.winner = 'Player'\n    } else if (PlayerBoard.areAllSunk()) {\n        gameOver.done = true\n        gameOver.winner = 'Computer'\n    }\n    return gameOver\n}\n\nfunction displayAttack(board, square) {\n    const index = square.id\n    board.receiveAttack(index)\n    const attackedCell = board.board[index]\n    if (attackedCell.hit === true) {\n        square.classList.add('hit')\n    } else if (attackedCell.missedAttack === true) {\n        square.classList.add('missed-Attack')\n    } else {\n        return\n    } \n}\n\nfunction startGame() {\n    if (shipsDom.length !== 0) return\n    shipsComp.forEach(ship => placeComputerShip(ship))\n    header.classList.remove('blur')\n    main.classList.remove('blur')\n    modal.classList.add('modal-hide')\n    gameControler()\n}\n\nfunction displayWinner() {\n    const startOverBtn = document.querySelector('#start-over')\n    const winner = document.querySelector('.winner')\n    const startOver = document.querySelector('.start-over')\n    startOver.classList.add('scale')\n    header.classList.add('blur')\n    main.classList.add('blur')\n    winner.textContent = `${isGameOver().winner} Wins!`\n    startOverBtn.addEventListener('click', () => {\n        window.location.reload();\n    })\n}\n\n//play the game until either player or the computer loses\nfunction gameControler() {\n    let computerTurn = false\n    const playerSquaresArray = shuffleSquares([...playerSquares])\n    computerSquares.forEach(square => {\n        square.addEventListener('click', () => {\n            if (!isGameOver().done) {\n                displayAttack(ComputerBoard, square)\n                if (isGameOver().done) {\n                    displayWinner()\n                } else {\n                    computerTurn = true\n                    const randomSquare = playerSquaresArray.shift()\n                    randomSquare.click()\n                    computerTurn = false\n                }\n            } else return\n        })\n    })\n    playerSquares.forEach(square => {\n        square.addEventListener('click', () => {\n            if (computerTurn) {\n                if (!isGameOver().done) {\n                    displayAttack(PlayerBoard, square)\n                } else if (isGameOver().done) {\n                    displayWinner()\n                } else return\n            } else return\n        })   \n    })\n}\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n    constructor(id, length) {\n        this.id = id\n        this.length = length\n        this.hitTimes = 0\n    }\n\n    hit() {\n        this.hitTimes++\n    }\n\n    isSunk() {\n        if (this.hitTimes >= this.length) {\n            return true\n        } else return false\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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