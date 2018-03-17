"use strict";

export default class ProjectContentManager {
    constructor() {
        console.log("Create ProjectContentManager object");
        this.currentPage = null;
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

    selectElement(ID) {
        const element = this.findElementByID(ID);
        const x = element.x;
        const y = element.y;
        const width = element.width;
        const height = element.height;
        this.dict.posXfield.value = x;
        this.dict.posYfield.value = y;
        this.dict.sizeWfield.value = width;
        this.dict.sizeHfield.value= height;
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
        };
        const page = this.currentPage;
        page.elements.push(element);
        this.selectElement(number);
    }
}