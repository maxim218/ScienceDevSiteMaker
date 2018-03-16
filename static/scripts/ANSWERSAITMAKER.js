/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuNavigationIniter__ = __webpack_require__(1);




class MyClassStarter {
    constructor() {
        console.log("Create main obj MyClassStarter");
        new __WEBPACK_IMPORTED_MODULE_0__MenuNavigationIniter__["a" /* default */]();
    }
}

window.onload = function() {
    const mainObj = new MyClassStarter();
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class MenuNavigationIniter {
    constructor() {
        console.log("Create MenuNavigationIniter obj");
        this.listElemes = document.getElementsByClassName("listElementMenu");
        this.listContens = document.getElementsByClassName("listMenuContent");
        this.hideAllContens();
        this.addEventsToListElements();
    }

    hideAllContens() {
        for(let i = 0; i < this.listContens.length; i++) {
            this.listContens[i].hidden = true;
        }
    }

    addEventsToListElements() {
        console.log("Add menu events to list elemes");
        for(let i = 0; i < this.listElemes.length; i++) {
            const element = this.listElemes[i];
            element.onclick = () => {
                console.log(element.id);
                this.hideAllContens();
                let number = element.id.toString().split("_")[1].toString();
                document.getElementById("qqq_" + number).hidden = false;
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MenuNavigationIniter;



/***/ })
/******/ ]);