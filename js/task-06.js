const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.dataset.length;


const updateToNumber = (string) => Number(string);
updateToNumber(inputLength);

const onInputCheck = (event) => {
    if (event.currentTarget.value.length == updateToNumber(inputLength)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}

inputEl.addEventListener('blur', onInputCheck);