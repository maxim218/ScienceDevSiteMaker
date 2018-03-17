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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProjectContentManager__ = __webpack_require__(2);





class MyClassStarter {
    getElement(elementName) {
        return this.d.getElementById(elementName + "");
    }

    constructor() {
        console.log("Create main obj MyClassStarter");
        this.d = document;
        this.createMainObjects();
        this.addEventToChoosePageBtn();
        this.getElement("choosePageBtn").click();
        this.addEventToChooseColorBtn();
        this.addEventsToCreateObjectButtons();
    }

    createMainObjects() {
        this.menuNavigator = new __WEBPACK_IMPORTED_MODULE_0__MenuNavigationIniter__["a" /* default */]();
        this.projectManager = new __WEBPACK_IMPORTED_MODULE_1__ProjectContentManager__["a" /* default */]();
    }

    addEventToChoosePageBtn() {
        console.log("Add event to choose page btn");
        const btn = this.getElement("choosePageBtn");
        const field = this.getElement("pageNameField");
        btn.onclick = () => {
            const value = field.value + "";
            this.projectManager.getPage(value);
        }
    }

    addEventToChooseColorBtn() {
        console.log("Add event to choouse color btn");
        const btn = this.getElement("chooseFonColorBtn");
        btn.onclick = () => {
            this.projectManager.setPageColor();
        }
    }

    addEventsToCreateObjectButtons() {
        console.log("Add events to create objects buttons");
        const find = function(objectDomId) {
            return document.getElementById(objectDomId);
        };

        const createTextBtn = find("createTextBtn");
        const createImageBtn = find("createImageBtn");
        const createRolicBtn = find("createRolicBtn");
        const createButtonBtn = find("createButtonBtn");
        const createInputFieldBtn = find("createInputFieldBtn");

        createTextBtn.onclick = () => {
            console.log("TEXT_BTN");
        };

        createImageBtn.onclick = () => {
            console.log("IMAGE_BTN");
        };

        createRolicBtn.onclick = () => {
            console.log("ROLIC_BTN");
        };

        createButtonBtn.onclick = () => {
            console.log("BUTTON_BTN");
        };

        createInputFieldBtn.onclick = () => {
            console.log("INPUT_BTN");
        };
    }
}

window.onload = function() {
    console.log("Window load OK");
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



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class ProjectContentManager {
    constructor() {
        console.log("Create ProjectContentManager object");
        this.currentPage = null;
        this.initDictionary();
        this.initPagesArray();
    }

    initDictionary() {
        console.log("Init dictionary of elements");
        function get(s) {
            return document.getElementById(s + "");
        }

        this.dict = {
            pageNameField: get("pageNameField"),
            fonColorField: get("fonColorField"),
            pageContent: get("pageContent"),
        };
    }

    initPagesArray() {
        this.pages = [];
    }

    addPage(pageName) {
        const page = {
            name: pageName,
            fon: "FFFFFF",
            elements: []
        };
        this.pages.push(page);
    }

    getPageObj(pageName) {
        for(let i = 0; i < this.pages.length; i++) {
            const page = this.pages[i];
            if (page.name === pageName) {
                return page;
            }
        }
        return null;
    }

    setPageColor() {
        const page = this.currentPage;
        const colorValue = this.dict.fonColorField.value + "";
        page.fon = colorValue + "";
        this.dict.pageContent.style.backgroundColor = "#" + colorValue;
    }

    loadPage() {
        const page = this.currentPage;
        this.dict.fonColorField.value = page.fon;
        this.dict.pageContent.style.backgroundColor = "#" + this.dict.fonColorField.value;
    }

    getPage(pageName) {
        for(let i = 0; i < this.pages.length; i++) {
            const page = this.pages[i];
            if(page.name === pageName) {
                console.log("Page found: " + page.name);
                this.currentPage = this.getPageObj(page.name);
                this.loadPage();
                return;
            }
        }

        console.log("Create NEW page: " + pageName);
        this.addPage(pageName);
        this.currentPage = this.getPageObj(pageName);
        this.loadPage();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProjectContentManager;


/***/ })
/******/ ]);