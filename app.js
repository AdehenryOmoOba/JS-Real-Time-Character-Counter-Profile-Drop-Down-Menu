let textarea = document.querySelector("textarea");
let count = document.querySelector(".count");

function countXters() {
  const textLength = textarea.value.length;
  count.innerText = `You have typed ${textLength} characters`;
}

function menuToggle() {
  let menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}
