"use strict";

import HTMLgenerator from "./HTMLgenerator";

export default class ProjectContentManager {
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
        // rewrite content
        this.renderAll();
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

    setImageContent(imageContent) {
        this.currentElement.imageProperties.image = imageContent;
        this.renderAll();
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

        // image prop
        // image is saved only in object

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
            }, imageProperties: {
                image: "./images/qqq.jpg"
            }

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
                const html = new HTMLgenerator(template, params).generate();
                console.log("\n\n" + html + "\n\n");
                htmlContent += html;
            }

            if(element.type === "IMAGE") {
                const template = " <div id = '@@@' style = 'position: absolute; padding: 0px; width: @@@px; height: @@@px; margin-left: @@@px; margin-top: @@@px; background-color: #@@@; color: #@@@; font-size: @@@px;'>";
                const params = [element.ID, element.width, element.height, element.x, element.y, element.textProperties.fon, element.textProperties.color, element.textProperties.size];
                const htmlFirst = new HTMLgenerator(template, params).generate();

                const tem = "<img src = '@@@' width = '@@@px' height = '@@@px'>";
                const par = [element.imageProperties.image, element.width, element.height];
                const htmlSecond = new HTMLgenerator(tem, par).generate();

                const htmlThird = "</div>";

                const html = htmlFirst + htmlSecond + htmlThird;
                console.log("\n\n" + html + "\n\n");
                htmlContent += html;
            }
        }

        this.dict.pageContent.innerHTML = htmlContent;

        this.pages.forEach((page) => {
            const elements = page.elements;
            elements.forEach((element) => {
                const obj = document.getElementById(element.ID);
                if(obj !== null && obj !== undefined) {
                    obj.onclick = () => {
                        this.currentElement = element;
                        console.log(element.ID);
                        const numberID = element.ID.split("----")[1];
                        this.selectElement(numberID);
                    }
                }
            });
        });
    }
}