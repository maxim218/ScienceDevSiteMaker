"use strict";

import MenuNavigationIniter from "./MenuNavigationIniter";
import ProjectContentManager from "./ProjectContentManager";

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
        this.addEventToChouseImageBtn();
        this.addEventToDropElementBtn();
        this.addEventToWatchProjectBtn();
    }

    createMainObjects() {
        this.menuNavigator = new MenuNavigationIniter();
        this.projectManager = new ProjectContentManager();
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

    addEventToChouseImageBtn() {
        console.log("Add file image button OK");

        const btn1 = document.getElementById("changeFileImageBtn");
        const btn2 = document.getElementById("chooseImageBtn");

        btn2.onclick = function() {
            console.log("CLICK");
            btn1.click();
        };

        const t = this;

        btn1.onchange = function() {
            const file = this.files[0];
            const myReader = new FileReader();
            myReader.readAsDataURL(file);

            myReader.onload = function(e) {
                const imageContent = e.target.result;
                t.projectManager.setImageContent(imageContent);
            }
        }
    }

    addEventToWatchProjectBtn() {
        console.log("Add event to save and watch btn");
        const watchBtn = document.getElementById("saveAndWatchProjectBtn");
        watchBtn.onclick = () => {
            console.log("--------------------------------");
            const pages = this.projectManager.getPagesArray();
            const pagesStr = JSON.stringify(pages);
            console.log(pagesStr);
            console.log("--------------------------------");
        }
    }

    addEventToDropElementBtn() {
        console.log("Add event to DELETE btn");
        const deleteBtn = document.getElementById("dropElementFromObjBtn");
        deleteBtn.onclick = () => {
            this.projectManager.deleteOneElement();
        }
    }

    addEventsToCreateObjectButtons() {
        console.log("Add events to create objects buttons");
        const find = function(objectDomId) {
            return document.getElementById(objectDomId);
        };

        const propLisetMenuOpener = find("www_6");
        const deleteElementLabel = find("www_5");
        propLisetMenuOpener.hidden = true;
        function showPropList() {
            propLisetMenuOpener.hidden = false;
            deleteElementLabel.hidden = false;
        }

        const createTextBtn = find("createTextBtn");
        const createImageBtn = find("createImageBtn");
        const createRolicBtn = find("createRolicBtn");
        const createButtonBtn = find("createButtonBtn");
        const createInputFieldBtn = find("createInputFieldBtn");

        createTextBtn.onclick = () => {
            console.log("TEXT_BTN");
            this.projectManager.addElement("TEXT");
            showPropList();
        };

        createImageBtn.onclick = () => {
            console.log("IMAGE_BTN");
            this.projectManager.addElement("IMAGE");
            showPropList();
        };

        createRolicBtn.onclick = () => {
            console.log("ROLIC_BTN");
            this.projectManager.addElement("ROLIC");
            showPropList();
        };

        createButtonBtn.onclick = () => {
            console.log("BUTTON_BTN");
            this.projectManager.addElement("BUTTON");
            showPropList();
        };

        createInputFieldBtn.onclick = () => {
            console.log("INPUT_BTN");
            this.projectManager.addElement("INPUT");
            showPropList();
        };
    }
}

window.onload = function() {
    console.log("Window load OK");
    const mainObj = new MyClassStarter();
};
