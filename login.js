const loginTab=
document.getElementById('loginTab');
const signupTab=
document.getElementById('signupTab');
const loginForm=
document.getElementById('loginForm');
const signupForm=
document.getElementById('signupForm');
const indicator=
document.getElementById('indicator');

loginTab.addEventListener('click', ()=> {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    indicator.style.transform='translateX(0%)';
});

signupTab.addEventListener('click', ()=> {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    indicator.style.transform='translateX(100%)';
});