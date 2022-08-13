console.log("JavaScript is working with DOM");
// console.log(document);
// console.log(document.body);

let item = document.getElementsByTagName("li");
let pagriDada = document.getElementById("pagri_dada");
let pagriItem = document.getElementsByClassName("pagri_item");
for (const i of pagriItem) {
    console.log(i.innerHTML);
}

// <----------------------Five way to we can access element in DOM ------------------------------>

// First For accessing Html Tag
document.getElementsByTagName("ul");

// Second For accessing Id
document.getElementById("pagri_dada");

// Third For accessing Html Class
document.getElementsByClassName("pagri_item");

// Fourth For accessing any tag or class With querySelector
document.querySelectorAll(".pagri_item"); // it will access the first element

// Fifth For accessing first element in any tag with querySelectorAll
document.querySelector("h1");