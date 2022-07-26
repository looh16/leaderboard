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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n\n\n(0,_page__WEBPACK_IMPORTED_MODULE_1__.htmlPage)();\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlPage\": () => (/* binding */ htmlPage)\n/* harmony export */ });\nvar htmlPage = function htmlPage() {\n  var scores = [{\n    id: 1,\n    name: 'name',\n    score: 100\n  }, {\n    id: 2,\n    name: 'name',\n    score: 100\n  }, {\n    id: 3,\n    name: 'name',\n    score: 100\n  }, {\n    id: 4,\n    name: 'name',\n    score: 100\n  }, {\n    id: 5,\n    name: 'name',\n    score: 100\n  }, {\n    id: 6,\n    name: 'name',\n    score: 100\n  }, {\n    id: 7,\n    name: 'name',\n    score: 100\n  }]; //set page title\n\n  document.title = \"Leaderboard\"; //page header\n\n  var header = document.createElement('header');\n  var headerTitle = document.createElement('h1');\n  var titleText = document.createTextNode(\"Leaderboard\");\n  headerTitle.appendChild(titleText);\n  header.appendChild(headerTitle);\n  document.body.appendChild(header); //section\n\n  var section = document.createElement('section');\n  section.className = \"container\"; //div for table\n\n  var divTable = document.createElement('div');\n  divTable.className = \"divTable\";\n  var divTableHeader = document.createElement('div');\n  divTableHeader.className = \"tableHeader\";\n  var tableTitle = document.createElement('h2');\n  tableTitle.className = \"tableTitle\";\n  var tableTitleText = document.createTextNode(\"Recent score\");\n  tableTitle.appendChild(tableTitleText);\n  var tableRefreshButton = document.createElement('button');\n  tableRefreshButton.className = \"refreshBtn\";\n  tableRefreshButton.innerHTML = 'Refresh';\n  divTableHeader.appendChild(tableTitle);\n  divTableHeader.appendChild(tableRefreshButton);\n  divTable.appendChild(divTableHeader); //div for form\n\n  var divForm = document.createElement('div');\n  divForm.className = \"divForm\";\n  var divFormTitle = document.createElement('h2');\n  divFormTitle.className = \"formTitle\";\n  var divFormText = document.createTextNode(\"Add your score\");\n  divFormTitle.appendChild(divFormText);\n  var form = document.createElement(\"form\");\n  form.setAttribute(\"method\", \"post\");\n  form.setAttribute(\"action\", \"\");\n  var nameInput = document.createElement(\"input\");\n  nameInput.setAttribute(\"type\", \"text\");\n  nameInput.setAttribute(\"name\", \"FullName\");\n  nameInput.setAttribute(\"placeholder\", \"Your Name\");\n  var scoreInput = document.createElement(\"input\");\n  scoreInput.setAttribute(\"type\", \"text\");\n  scoreInput.setAttribute(\"name\", \"score\");\n  scoreInput.setAttribute(\"placeholder\", \"Your Score\");\n  var submitButton = document.createElement(\"input\");\n  submitButton.setAttribute(\"type\", \"submit\");\n  submitButton.setAttribute(\"value\", \"Submit\");\n  form.appendChild(nameInput);\n  form.appendChild(scoreInput);\n  form.appendChild(submitButton);\n  divForm.appendChild(divFormTitle);\n  divForm.appendChild(form); //table\n\n  var table = document.createElement(\"table\");\n  table.setAttribute(\"id\", \"tableId\");\n  var tableBody = document.createElement(\"tbody\");\n  scores.forEach(function (score) {\n    var row = document.createElement(\"tr\");\n    var td = document.createElement(\"td\");\n    td.appendChild(document.createTextNode(\"\".concat(score.name, \" : \").concat(score.score)));\n    row.appendChild(td);\n    tableBody.appendChild(row);\n  });\n  table.appendChild(tableBody);\n  divTable.appendChild(table);\n  section.appendChild(divTable);\n  section.appendChild(divForm);\n  document.body.appendChild(section);\n};\n\n//# sourceURL=webpack://leaderboard/./src/page.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://leaderboard/./src/style.css?");

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