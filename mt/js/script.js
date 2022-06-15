let root = document.documentElement;
const checkbox = document.getElementById('checkbox');

function toggle () {
    let color = getComputedStyle(root);
    var theme = color.getPropertyValue('--main-color');
    if (theme === '#5f4b8b') {
        root.style.setProperty('--main-color', '#f5df4d')
        root.style.setProperty('--secondary-color', '#5f4b8b')
    } else if (theme === '#f5df4d') {
        root.style.setProperty('--main-color', '#5f4b8b')
        root.style.setProperty('--secondary-color', '#f5df4d')
    }
    console.log(theme);
}

checkbox.addEventListener("change", toggle);
checkbox.addEventListener("ch")

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
