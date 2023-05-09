const inputControlEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const onUpdateInlineStyle = () => {
    spanEl.style.fontSize = Number(inputControlEl.value) + 'px';
}

inputControlEl.addEventListener('input', onUpdateInlineStyle);

