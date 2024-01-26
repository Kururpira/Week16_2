
const form = document.forms.form;
const userNameInput = form.elements.username;
const emailInput = form.elements.email;
const agreeTermsCheckbox = form.elements.agreeTerms;
const age = form.elements.age;
const yes = form.elements.yes;
const no = form.elements.no;
const firstSelect = form.elements.firstSelect;


const userNameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const termsError = document.getElementById('termsError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function(evt) {
evt.preventDefault();
let hasError = false;
const firstName = form.elements.username.value;
const email = form.elements.email.value;
const age = form.elements.age.value;
const firstSelectValue = form.elements.firstSelect.value;
const yesValue = form.elements.yes.value;
const noValue = form.elements.no.value;

console.log('Имя:', firstName);
console.log('Email:', email);
if (yesValue == true){
	console.log('Пол: женский');
}
else{
	console.log('Пол: мужской');
}
console.log('Возраст:', age);
console.log('Профессия:', firstSelectValue);

  // Очистка предыдущих сообщений об ошибках
userNameError.style.display = 'none';
emailError.style.display = 'none';
termsError.style.display = 'none';

if (userNameInput.value === '') {
    userNameError.textContent = 'Введите имя пользователя.';
    userNameError.style.display = 'block';
    hasError = true;
}

if (validateEmail(emailInput.value) === false) {
    emailError.textContent = 'Введите корректный email.';
    emailError.style.display = 'block';
    hasError = true;
}

if (agreeTermsCheckbox.checked === false) {
    termsError.textContent = 'Необходимо согласие с условиями.';
    termsError.style.display = 'block';
    hasError = true;
}

if (hasError === false) {
    alert('Форма успешно отправлена!');
}
});

function validateEmail(email) {
let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
return regex.test(email);
}
document.forms.form.addEventListener('submit', function(evt) {
    const checkbox1 = document.getElementById('yes').checked;
    const checkbox2 = document.getElementById('no').checked;
    const errorMessage = document.getElementById('error-message');

    if (!checkbox1 && !checkbox2) {
    evt.preventDefault();
    errorMessage.textContent = 'Пожалуйста, выберите один из вариантов';
	errorMessage.style = 'red';
    } else {
    errorMessage.textContent = '';
    }
});
