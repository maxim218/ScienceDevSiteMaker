"use strict";

import MenuNavigationIniter from "./MenuNavigationIniter";

class MyClassStarter {
    constructor() {
        console.log("Create main obj MyClassStarter");
        new MenuNavigationIniter();
    }
}

window.onload = function() {
    const mainObj = new MyClassStarter();
};