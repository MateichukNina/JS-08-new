import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[type="email"]');
const textInput = document.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(() => {
    const formData = { email: emailInput.value, message: textInput.value };
    localStorage.setItem(STORAGE_KEY , JSON.stringify(formData));
  }, 500)
);

document.addEventListener('DOMContentLoaded', () => {
  const formData = localStorage.getItem(STORAGE_KEY);

  if (formData) {
    const { email, message } = JSON.parse(formData);
    emailInput.value = email;
    textInput.value = message;
  }
  console.log(formData);
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = { email: emailInput.value, message: textInput.value };
  if (formData.email === '' || formData.message === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
