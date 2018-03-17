"use strict";

export default class ProjectContentManager {
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