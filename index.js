/*
let ecole = [
    "Richardson",
    "Webster",
    "Alexis",
    "Berlin",
    "Bouquet"
    ];
    
console.log(ecole[2]);
console.log(ecole.length);
console.log(ecole[ecole.length - 1]);

let newArray = ecole.pop();
console.log(newArray)
let addName = ecole.push("Jean");
let sliceArray = ecole.slice(0, 3);
console.log(sliceArray);
console.log(ecole.indexOf("Alexis"));

function include(){
    if(ecole.includes("Webster")){
        console.log("he is a teacher")
    }else{
        console.log("we do not find webster")
    }
}
include();
ecole.push("Berlin");

let otherName = ecole.find((element) => element === "Berlin");
console.log(otherName);

let otherNameFilter = ecole.filter((element) => element === "Berlin");
console.log(otherNameFilter);
*/

let pays = new Set([
    "Haïti",
    "Congo",
    "USA",
    "Italie"
]);
pays.add("Alemagne");
console.log(pays.size);
//console.log(pays);
pays.forEach((element) => {
    console.log(element);
})
console.log(pays.has("Alemagne"))
