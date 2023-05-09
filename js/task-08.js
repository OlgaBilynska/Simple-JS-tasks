const formEl = document.querySelector('.login-form');
console.log(formEl);

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

        const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
        alert('Fill in all the fields');
        return;
    }

    const formData = { email, password };
    console.log(formData);

    formEl.reset();
}




