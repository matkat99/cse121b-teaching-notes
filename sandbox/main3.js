function copyInput(event) {
  console.log(event);
  console.log(event.currentTarget);
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}

function init() {
  const buttonElement = document.getElementById("submitButton");
  buttonElement.addEventListener("click", copyInput);
}
init();

const steps = ["one", "two", "three"];
// callback declaration
function makeList(item) {
  const listElement = document.getElementById("myList");
  listElement.innerHTML += `<li>${item}</li>`;
}
steps.forEach(makeList);

// is the luckyNumber in the list?
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = -1;
myArray.forEach(function (item, index) {
  if (item === luckyNumber) {
    luckyIndex = index;
  }
});
myArray.forEach((item, index) => {
  if (item === luckyNumber) {
    luckyIndex = index;
  }
});

const steps2 = ["one", "two", "three"];
const stepsHtml = steps2.map(function (item) {
  return `<li>${item}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join("");
