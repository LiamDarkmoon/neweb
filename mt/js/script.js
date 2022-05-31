const cartButtons = document.querySelectorAll('.cart-button');

cartButtons.forEach(button => {
    button.addEventListener('click', cartClick);
});

function cartClick () {
    let button = this;
    button.classList.add('clicked');
}

cartButtons.forEach(button => {
    button.addEventListener('animationend', removeClick);
});

function removeClick () {
    let button = this;
    button.classList.remove('clicked');
}