"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Numbers_1 = require("./Numbers");
const Strings_1 = require("./Strings");
const dateArray = [
    new Date(2200, 9, 24),
    new Date(2035, 9, 24),
    new Date(2041, 9, 24),
    new Date(2029, 9, 24),
];
const years = dateArray.map((date) => {
    return date.getFullYear();
});
const sortYears = new Numbers_1.Numbers(years);
console.log("****", sortYears);
sortYears.sort();
console.log("***1", sortYears);
console.log("***2", sortYears.number);
const stringsData = new Strings_1.Strings("vdGryF");
stringsData.sort();
console.log(stringsData.str);
