const formElements = document.querySelectorAll('.input-block')
const sendBtn = document.querySelector('.send-btn')
const form = document.querySelector('.form')
const validationFields = document.querySelectorAll('.validation-field')

function validateForm() {
  validationFields.forEach(el => el.classList.remove('active'))
  if(Array.from(formElements).some(el => !el.children[1].checkValidity())){
    Array.from(formElements).filter(el => el.children[1].checkValidity() == false).forEach(el => el.children[2].classList.add('active'))
  } else {
    formElements.forEach(el => {console.log(`${el.children[0].textContent}: ${el.children[1].value}`)})
  }
}

function validateElement(event) {
  let validationField = event.target.parentNode.children[2]
  if(event.target.checkValidity()) {
    validationField.classList.remove('active')
  } else {
    validationField.classList.add('active')
  }
}

form.addEventListener('submit', e => e.preventDefault())
sendBtn.addEventListener('click', validateForm)
formElements.forEach(el => el.children[1].addEventListener('input', validateElement))

const message = document.querySelector('#message')
const symbolCounter = document.querySelector('.value-field')
const maxLength = message.maxLength;

const updateCounter = (e) => {
  const len = e ? e.target.value.length : 0;
  symbolCounter.style.background = `linear-gradient(to right, rgb(0, 180, 224) 0%, rgb(0, 180, 224) ${len}%, rgba(172, 172, 172, 0.3) ${len}%, rgba(172, 172, 172, 0.3) 100%)`;
}

message.addEventListener('keyup', updateCounter);
message.addEventListener('keydown', updateCounter);


const clearBtn = document.querySelector('.clear-btn')

function clearFields() {
  formElements.forEach(el => el.children[1].value = '')
  validationFields.forEach(el => el.classList.remove('active'))
  symbolCounter.style.background = 'rgba(172, 172, 172, 0.3)'
  clearBtn.classList.toggle('refresh')
}

clearBtn.addEventListener('click' , clearFields)