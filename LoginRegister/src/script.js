//buttons
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
//Container
const container = document.getElementById('container');

//Events
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
})

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
})