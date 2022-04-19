//SELECT Items
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById(".grocery");
const submitBtn = document.querySelectior(".submit-btn");
const container = document.querySelectior(".grocery-container");
const list = document.querySelectior(".grocery-list");
const clearBtn = document.querySelectior(".clear-btn");

//edit option
let editElement;
let editFlag = false;
let editIT = "";
//event listeners
//submitform
form.addEventListener("submit", addItem);

//functions
//prevents default behavior of submitting the form when pressing submit
function addItem(e) {
  e.preventDefault();
  console.log(grocery.value);
}
//Local Storage

//Setup Items
