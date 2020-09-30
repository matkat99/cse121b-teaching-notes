"use strict";
const newParagraphElement = document.createElement("p");
newParagraphElement.innerHTML = "This is a new paragraph";

document.body.appendChild(newParagraphElement);

const anotherNewPara = document.createElement("p");

anotherNewPara.innerHTML = "Section One paragraph";

document.getElementById("sectionOne").appendChild(anotherNewPara);

const name = "BroT";
const newDiv = document.createElement("div");
newDiv.innerHTML = `<ul><li>${name}</li><li>Two</li><li>Three</li></ul>`;
document.body.appendChild(newDiv);
