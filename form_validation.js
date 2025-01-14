const form = document.getElementById('form');
const formInput = document.getElementById('form_input');
const formSubmitBtn = document.getElementById('form_submit');
const formErrorElement = document.getElementById('form_error')

formSubmitBtn.addEventListener('click', validateForm)

function validateForm(){
  console.log('Hello There')
}
