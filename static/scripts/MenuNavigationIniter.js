"use strict";

export default class MenuNavigationIniter {
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
