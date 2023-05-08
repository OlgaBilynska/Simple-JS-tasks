let counterValue = 0;

const counterEl = document.querySelector('#counter');
console.log(counterEl);

const decrementBtn = counterEl.querySelector('[data-action="decrement"]');
console.log(decrementBtn);

const incrementBtn = counterEl.querySelector('[data-action="increment"]')
console.log(incrementBtn);

let counterNumberEl = document.querySelector('#value');
let valueEl = counterNumberEl.textContent;

const decreaseValue = () => {
  counterValue -= 1;
    console.log(counterValue);
    return counterValue;
};

const increaseValue = () => {
    counterValue += 1;
    console.log(counterValue);
    return counterValue;
}

const updateDecrementValue = decrementBtn.addEventListener('click', decreaseValue);
const updateIncrementValue = incrementBtn.addEventListener('click', increaseValue);

console.log(counterValue);

const updateValueEl = () => {
    valueEl = counterValue;
    console.log(valueEl);
    return counterNumberEl;
}

updateValueEl();
