const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.dataset.length;


const updateToNumber = (string) => Number(string);
updateToNumber(inputLength);

const onInputCheck = (event) => {
    if (event.currentTarget.value.length == updateToNumber(inputLength)) {
        // console.log(typeof Number(event.currentTarget.value.length));
        // console.log(typeof Number(inputLength));
        // console.log(`input`, event.currentTarget.value.length);
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
        // console.log(event.currentTarget.value.length);
    }
}

inputEl.addEventListener('blur', onInputCheck);