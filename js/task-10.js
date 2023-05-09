const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', () => { createBoxes(inputEl.value) });
btnDestroyEl.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const blockEl = document.createElement('div');
    blockEl.style.width = 30 + i * 10 + 'px';
    blockEl.style.height = 30 + i * 10 + 'px';
    blockEl.style.backgroundColor = getRandomHexColor();
    blockEl.classList.add('box-child');
   boxesEl.append(blockEl);
  }
}

function destroyBoxes() {
  const boxChildEl = document.querySelectorAll('.box-child');
  boxChildEl.forEach(el => el.remove());
}
