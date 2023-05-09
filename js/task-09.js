const bodyEl = document.querySelector('body');
console.log(bodyEl);
const buttonEl = document.querySelector('.change-color');
console.log(buttonEl);
const colorNameEl = document.querySelector('.color');
console.log(colorNameEl);

buttonEl.addEventListener('click', onButtonClick);

function onButtonClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = bodyEl.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
