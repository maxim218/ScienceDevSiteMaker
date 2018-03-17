"use strict";

export default class HTMLgenerator {
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
