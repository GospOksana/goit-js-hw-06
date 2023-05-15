const inputControl = document.querySelector('input#font-size-control');
const textMagia = document.querySelector('span#text');

inputControl.addEventListener('input', () => {
    textMagia.style.fontSize = `${inputControl.value}px`;
    
})
