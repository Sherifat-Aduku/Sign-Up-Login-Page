const login= document.getElementById('login');

const signup = document.getElementById('signup');

login.addEventListener('click', () => {

  login.classList.add('active');

  signup.classList.remove('active');

});

signup.addEventListener('click', () => {

  signup.classList.add('active');

  loginTab.classList.remove('active');

});