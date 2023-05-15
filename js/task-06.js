const inputText = document.querySelector('#validation-input');
const dataLength = document.querySelector('input[data-length="6"]');
inputText.addEventListener('blur', () => {
    const counter = dataLength.dataset.length;
    // console.log(counter);
    if(inputText.value.length == counter){
        inputText.classList.add('valid');
    }else{
        inputText.classList.add('invalid');
    }
}) 