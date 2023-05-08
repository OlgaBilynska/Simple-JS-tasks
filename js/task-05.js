const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');


const onInputChange = (event) => { 
    if (event.currentTarget.value.length > 0) {
        nameEl.textContent = "Anonymous";
    } else {
        nameEl.textContent = event.currentTarget.value;
    }
}

inputEl.addEventListener('input', onInputChange);


