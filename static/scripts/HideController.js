"use strict";

export default class HideController {
    constructor() {
        console.log("Create HideController");
        this.d = {};
        this.initDict();
        this.hideAll();
    }

    add(elementID) {
        this.d[elementID] = document.getElementById(elementID);
    }

    initDict() {
        this.add("imagePropSelectBox");
        this.add("textPropSelectBox");
    }

    hideAll() {
        for(let elementID in this.d) {
            this.d[elementID].hidden = true;
        }
    }

    showElement(elementID) {
        this.d[elementID].hidden = false;
    }
}
