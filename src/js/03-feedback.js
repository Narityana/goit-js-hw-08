import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const DATA_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(DATA_KEY));
const { email, message } = formEl.elements;

function onInput(event) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(DATA_KEY, JSON.stringify(dataForm));
}

if (dataForm) {
  email.value = dataForm.email;
  message.value = dataForm.message;
}

function onFormSubmit(event) {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Заповніть, будь ласка, всі поля форми!');
  }

  console.log(dataForm);
  event.currentTarget.reset();
  localStorage.removeItem(DATA_KEY);
}
