import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';
const saveToLocalStorage = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
}, 500);

const populateFormFields = () => {
  const savedFormData = localStorage.getItem(storageKey);
  if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData);
    emailInput.value = email;
    messageTextarea.value = message;
  }
};
const handleSubmit = event => {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log('Form Data:', formData);
  localStorage.removeItem(storageKey);
  emailInput.value = '';
  messageTextarea.value = '';
};
form.addEventListener('input', saveToLocalStorage);
form.addEventListener('submit', handleSubmit);

populateFormFields();
