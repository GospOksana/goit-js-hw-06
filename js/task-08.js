const form = document.querySelector('.login-form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const buttonSub = document.querySelector('button[type="submit"]');



form.addEventListener('submit', event => {
    event.preventDefault();
    if( emailInput.value !== '' &&  passwordInput.value !== ''){
        const email = emailInput.value;
        const password = passwordInput.value;
        let formValue = {email, password};
        console.log(formValue);
        emailInput.value = '';
        passwordInput.value = '';
    }else{
        
        window.alert('Заповніть всі поля!');
    }
})