import { Numbers } from "./Numbers";
import { Strings } from "./Strings";

const dateArray = [
    new Date(2200, 9, 24),
    new Date(2035, 9, 24),
    new Date(2041, 9, 24),
    new Date(2029, 9, 24),
];

const years = dateArray.map((date) => {
    return date.getFullYear();
});

const sortYears = new Numbers(years);

console.log("****", sortYears);
sortYears.sort();
console.log("***1", sortYears);
console.log("***2", sortYears.number);

const stringsData = new Strings("vdGryF");
stringsData.sort();
console.log(stringsData.str);
