import throttle from 'lodash.throttle';

const forms = document.querySelector('.feedback-form');
const email = forms.querySelector('input');
const textarea = forms.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

forms.addEventListener('input', throttle(onFormInput, 500));
forms.addEventListener('submit', onFormSubmit);

let localObject = {};
populateFormSubmit();

function onFormInput(evt) {
  localObject[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localObject));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(localObject);
}

function populateFormSubmit() {
  localObject = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  if (localObject) {
    textarea.value = localObject.message || '';
    email.value = localObject.email || '';
  }
}


