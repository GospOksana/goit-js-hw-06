const refs = {
    decrementButton: document.querySelector('[data-action="decrement"]'),
    incrementButton: document.querySelector('[data-action="increment"]'),
    valueSpan: document.querySelector('#value'),
}

let counterValue = 0;
 refs.decrementButton.addEventListener('click', () =>
 {counterValue = counterValue - 1;
 refs.valueSpan.textContent = counterValue;})

 refs.incrementButton.addEventListener('click', () =>
 {counterValue = counterValue + 1;
 refs.valueSpan.textContent = counterValue;})