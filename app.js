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
  input.value = "";
});

oneDelete.addEventListener("click", function () {
  let equal = input.value;
  equal = equal.slice(0, -1);
  input.value = equal;
});

equalSign.addEventListener("click", function () {
  if (input.value) {
    input.value = eval(input.value);
  }
});

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    input.value = eval(input.value);
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key >= "0" && e.key <= "9") {
    input.value += e.key;
  } else if (e.key === "Enter") {
    e.preventDefault();
    input.value = eval(input.value);
  } else if (["+", "-", "*", "/", "(", ")", "%", "."].includes(e.key)) {
    input.value += e.key;
  } else if (e.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
});
