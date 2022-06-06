const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('input');
const loginButton = document.querySelector('button');
const USERNAME_KEY = 'username';

function handleEventBtn() {
  const value = loginInput.value;
  if (value === '') {
    alert('please enter yor name');
  } else if (value.length > 15) {
    alert('your name is too long');
    console.log('your name is ' + value.length + ' letters long');
  }
  console.log(value);
}
function eventinput() {
  console.log('mouse is on top of input box');
  console.dir(loginInput);
}
function submitForm(event) {
  event.preventDefault();
  loginForm.classList.add('hidden');
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove('hidden');
  loginForm.classList.add('hidden');
  console.log(USERNAME_KEY);
}
loginButton.addEventListener('click', handleEventBtn);
loginInput.addEventListener('click', eventinput);

const savedusername = localStorage.getItem(USERNAME_KEY);

if (savedusername === null) {
  loginForm.classList.remove('hidden');
  loginForm.addEventListener('submit', submitForm);
} else {
}
