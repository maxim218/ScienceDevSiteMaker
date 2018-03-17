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
