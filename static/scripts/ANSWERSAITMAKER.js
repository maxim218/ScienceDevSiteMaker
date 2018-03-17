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
        this.addEventToChangePropertyBtn();
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

    addEventToChangePropertyBtn() {
        console.log("addEventToChangePropertyBtn OK");

        const elementsPropertiesOK = document.getElementById("elementsPropertiesOK");
        elementsPropertiesOK.onclick = () => {
            this.projectManager.changePropertyOfSelectedObject();
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
            this.projectManager.addElement("TEXT");
        };

        createImageBtn.onclick = () => {
            console.log("IMAGE_BTN");
            this.projectManager.addElement("IMAGE");
        };

        createRolicBtn.onclick = () => {
            console.log("ROLIC_BTN");
            this.projectManager.addElement("ROLIC");
        };

        createButtonBtn.onclick = () => {
            console.log("BUTTON_BTN");
            this.projectManager.addElement("BUTTON");
        };

        createInputFieldBtn.onclick = () => {
            console.log("INPUT_BTN");
            this.projectManager.addElement("INPUT");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HTMLgenerator__ = __webpack_require__(3);




class ProjectContentManager {
    constructor() {
        console.log("Create ProjectContentManager object");
        this.currentPage = null;
        this.currentElement = null;
        this.number = 0;
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
            posXfield: get("posXfield"),
            posYfield: get("posYfield"),
            sizeWfield: get("sizeWfield"),
            sizeHfield: get("sizeHfield"),
            TEXTcontentField: get("TEXTcontentField"),
            TEXTsizeField: get("TEXTsizeField"),
            TEXTtextcolorFIELD: get("TEXTtextcolorFIELD"),
            TEXTbackgroundFIELD: get("TEXTbackgroundFIELD"),
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

    changePropertyOfSelectedObject() {
        const element = this.currentElement;

        // X Y W H
        element.x = this.dict.posXfield.value;
        element.y = this.dict.posYfield.value;
        element.width = this.dict.sizeWfield.value;
        element.height = this.dict.sizeHfield.value;

        // text prop
        element.textProperties.content = this.dict.TEXTcontentField.value;
        element.textProperties.size = this.dict.TEXTsizeField.value;
        element.textProperties.color = this.dict.TEXTtextcolorFIELD.value;
        element.textProperties.fon = this.dict.TEXTbackgroundFIELD.value;

        this.renderAll();
    }

    selectElement(ID) {
        // select current element
        this.currentElement = this.findElementByID(ID);

        // properties of every element
        const element = this.currentElement;
        const x = element.x;
        const y = element.y;
        const width = element.width;
        const height = element.height;
        this.dict.posXfield.value = x;
        this.dict.posYfield.value = y;
        this.dict.sizeWfield.value = width;
        this.dict.sizeHfield.value= height;

        // textProperty
        const textContent = element.textProperties.content;
        const textSize = element.textProperties.size;
        const textColor = element.textProperties.color;
        const textFonColor = element.textProperties.fon;
        this.dict.TEXTcontentField.value = textContent;
        this.dict.TEXTsizeField.value = textSize;
        this.dict.TEXTtextcolorFIELD.value = textColor;
        this.dict.TEXTbackgroundFIELD.value = textFonColor;
    }

    findElementByID(ID) {
        for(let i = 0; i < this.pages.length; i++) {
            const page = this.pages[i];
            const elementsArray = page.elements;
            for(let k = 0; k < elementsArray.length; k++) {
                const element = elementsArray[k];
                if(element.ID === "element-in-dom----" + ID) {
                    return element;
                }
            }
        }

        return null;
    }

    addElement(type) {
        this.number += 1;
        const number = this.number.toString();
        const ID = "element-in-dom----" + number;
        const element = {
            type: type,
            width: 200,
            height: 200,
            x: 0,
            y: 0,
            ID: ID,
            textProperties: {
                content: "Мой текст",
                size: 15,
                color: "000000",
                fon: "00FF00",
            },
        };
        const page = this.currentPage;
        page.elements.push(element);
        this.selectElement(number);
        this.renderAll();
    }

    renderAll() {
        this.dict.pageContent.innerHTML = "";

        const page = this.currentPage;
        const elements = page.elements;
        let htmlContent = "";

        for(let i = 0; i < elements.length; i++) {
            const element = elements[i];

            if(element.type === "TEXT") {
                const template = " <div id = '@@@' style = 'position: absolute; padding: 0px; width: @@@px; height: @@@px; margin-left: @@@px; margin-top: @@@px; background-color: #@@@; color: #@@@; font-size: @@@px;'>@@@</div>";
                const params = [element.ID, element.width, element.height, element.x, element.y, element.textProperties.fon, element.textProperties.color, element.textProperties.size, element.textProperties.content];
                const html = new __WEBPACK_IMPORTED_MODULE_0__HTMLgenerator__["a" /* default */](template, params).generate();
                console.log("\n\n" + html + "\n\n");
                htmlContent += html;
            }
        }

        this.dict.pageContent.innerHTML = htmlContent;

        this.pages.forEach((page) => {
            const elements = page.elements;
            elements.forEach((element) => {
                document.getElementById(element.ID).onclick = () => {
                    this.currentElement = element;
                    console.log(element.ID);
                    const numberID = element.ID.split("----")[1];
                    this.selectElement(numberID);
                }
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProjectContentManager;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class HTMLgenerator {
    constructor(stringTemplate, arrayParam) {
        this.stringTemplate = stringTemplate;
        this.arrayParam = arrayParam;
    }

    generate() {
        const stringTemplate = this.stringTemplate;
        const arrayParam = this.arrayParam;

        const mass = stringTemplate.split("@@@");

        let result = "";
        for(let i = 0; i < mass.length; i++) {
            if(mass[i] !== null && mass[i] !== undefined) {
                result = result + (mass[i] + "");

                if(arrayParam[i] !== null && arrayParam[i] !== undefined) {
                    result = result + (arrayParam[i] + "");
                }
            }
        }

        result += "";

        return result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HTMLgenerator;



/***/ })
/******/ ]);