const forms = document.querySelector('.feedback-form');
const input = forms.querySelector('input');
const textarea = forms.querySelector('textarea');
const button = forms.querySelector('button');
console.log(textarea);

// forms.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTexteriaInput);

// function onFormSubmit(evt) {}

function onTexteriaInput(evt) {
  const value = evt.currentTarget.value;

  console.log(value);
}
