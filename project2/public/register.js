"use strict";
(function(){

    const emailInputEls = document.querySelectorAll('.register-email__input');
    const emailErrorEls = document.querySelectorAll('.register-email__error');
    const confirmEmailErrorEls = document.querySelectorAll('.register-confirm__error');
    const confirmEmailInputEls = document.querySelectorAll('.register-confirm__input');
    const formEls = document.querySelectorAll('.register');
    let isInvalid = false;
    for(let i = 0; i<formEls.length; i++){
        formEls[i].addEventListener('input',(event) => {
            isInvalid = false;
            emailErrorEls[i].innerText="";
            confirmEmailErrorEls[i].innerText="";
                if( !emailInputEls[i].value) {
                    emailErrorEls[i].innerText = "This is required";
                    isInvalid = true;
                }

                if(!emailInputEls[i].value.includes('@')){
                    emailErrorEls[i].innerText = "Must include a @";
                    isInvalid = true;
                }

                if(confirmEmailInputEls[i].value !== emailInputEls[i].value){
                    confirmEmailErrorEls[i].innerText="This is confirm email is different with email";
                    isInvalid = true;
                }

        })
        formEls[i].addEventListener('submit',event=>{
            if(isInvalid || emailInputEls[i].value === ""){
                emailErrorEls[i].innerText = "This is requried";
                confirmEmailErrorEls[i].innerText = "This is required";
                event.preventDefault();
            }
        })
    }
    
})()