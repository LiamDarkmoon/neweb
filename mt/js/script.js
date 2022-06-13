let root = document.querySelector(':root');
let color = '#5f4b8b';
console.log(color);

root.addEventListener("change", () => {
  if (color === '#5f4b8b') {
    root.style.setProperty('--main-color', '#f5df4d');
    root.style.setProperty('--secondary-color', '#5f4b8b');
    color = '#f5df4d';
  } else if (color === '#f5df4d') {
    root.style.setProperty('--main-color', '#5f4b8b');
    root.style.setProperty('--secondary-color', '#f5df4d');
    color = '#5f4b8b';
  }
});

const cartButtons = document.querySelectorAll(".cart-button");

cartButtons.forEach((button) => {
  button.addEventListener("click", cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add("clicked");
}

cartButtons.forEach((button) => {
  button.addEventListener("animationend", removeClick);
});

function removeClick() {
  let button = this;
  button.classList.remove("clicked");
}
