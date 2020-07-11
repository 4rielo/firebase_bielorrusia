//signup

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('sumit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(email, password)
})