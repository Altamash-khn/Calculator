const btns = document.querySelectorAll(".btn");
const input = document.querySelector(".input");
const deleteBtn = document.querySelector(".delete-btn");
const equalSign = document.querySelector(".equal");
const oneDelete = document.querySelector(".delete");

btns.forEach((button) => {
  button.addEventListener("click", function (e) {
    input.value += e.target.value;
  });
});

deleteBtn.addEventListener("click", function () {
  console.log("deleteBtn called");
  input.value = "";
});

oneDelete.addEventListener("click", lastDelete);
function lastDelete() {
  let equal = input.value;
  equal = equal.slice(0, -1);
  input.value = equal;
}

equalSign.addEventListener("click", function () {
  if (input.value) {
    input.value = eval(input.value);
  }
});

input.addEventListener("keydown", function (e) {
  if(e.key === "Enter"){
    input.value = eval(input.value);
  }
});