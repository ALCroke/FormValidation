var signUpForm = document.querySelector('#signUpForm');
var userNameField = document.querySelector('usernamefield');
var useereNameErrorMessage = document.querySelector('#usernameErrorMessage');

signUpForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    if(!signUpForm.username.value == false){

        usernamefield.classList.add('errorField');
        usereNameErrorMessage.classList.remove('hidden');
     console.log('You need to enter a username');

    }
});