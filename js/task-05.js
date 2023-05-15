const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}

refs.nameInput.addEventListener('input', () => 
{
    refs.nameOutput.textContent = refs.nameInput.value;
})