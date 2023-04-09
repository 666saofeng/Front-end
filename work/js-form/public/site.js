"use strict";
(function(){

const nameEl = document.querySelector('.register-name');
const nameInputEl = document.querySelector('.register-name__input ');
const emailInputEl = document.querySelector('.register-email__input');
const emailErrorEl = document.querySelector('.register-email__error');
const confirmErrorEl = document.querySelector('.register-confirm__error');
const confirmInputEl = document.querySelector('.register-confirm__input');
const formEl = document.querySelector('.register');

// nameEl.addEventListener('input', (event) => { //fat arrow function
//     console.log("typing happened");
//     console.log(event.target.value);
//    });


formEl.addEventListener('submit',(event)=>{
    let isInvalid = false;
    nameEl.classList.remove('register-name--invalid');
    emailErrorEl.innerText = "";
    confirmErrorEl.innerText = "";

    if ( !nameInputEl .value ) {
       nameEl.classList.add('register-name--invalid');
       isInvalid = true;
        // event.preventDefault();
    }

    if ( !emailInputEl.value ) {
        emailErrorEl.innerText="This is required";
        isInvalid = true;
    }

    if ( confirmInputEl.value !== emailInputEl.value ) {
        confirmErrorEl.innerText="This is confirm email is different with email";
        isInvalid = true;
        
    }
    console.log(isInvalid);
    if(isInvalid){
        event.preventDefault();
        console.log("error");
    }
})
})();

