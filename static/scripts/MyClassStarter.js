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
}

window.onload = function() {
    console.log("Window load OK");
    const mainObj = new MyClassStarter();
};
