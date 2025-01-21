const form = document.getElementById('form');
const formInput = document.getElementById('form_input');
const formSubmitBtn = document.getElementById('form_submit');
const formErrorElements = document.getElementsByClassName('form_error')

formSubmitBtn.addEventListener('click', (e) => {validateForm(e)})

function validateForm(e){
  e.preventDefault()
  let emailValue = formInput.value
  if(emailValue){
    let formCheck = checkandValidateEmailPattern(emailValue)
    if(formCheck){
      alert('Thank You for Subscribing!')
    }
  }else{
    displayFormError() 
  }
}

// Function to validate Email Id
function checkandValidateEmailPattern(email){
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if(!emailPattern.test(email)){
    displayFormError()
    formInput.value = '';
    emailValue = ''
    return false
  }else{
    return true
  }
}

//Function to display form errors
function displayFormError(){
  for (let index = 0; index < formErrorElements.length; index++) {
    formErrorElements[index].style.display = 'block'
  }
}