let counterValue = 0;

const counterEl = document.querySelector('#counter');
const decrementBtn = counterEl.querySelector('[data-action="decrement"]');
const incrementBtn = counterEl.querySelector('[data-action="increment"]')

let counterNumberEl = document.querySelector('#value');

const updateValueEl = () => {
    counterNumberEl.textContent = counterValue;
}

const decreaseValue = () => {
  counterValue -= 1;
    // console.log(counterValue);
    updateValueEl();
    return counterValue;
};

const increaseValue = () => {
    counterValue += 1;
    // console.log(counterValue);
    updateValueEl();
    return counterValue;
}

const updateDecrementValue = decrementBtn.addEventListener('click', decreaseValue);
const updateIncrementValue = incrementBtn.addEventListener('click', increaseValue);



