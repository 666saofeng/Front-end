"use strict";
(function(){
    const navButtonEl = document.querySelector('.header__nav-button');
    const navMenuEl = document.querySelector('.nav__menu');

    navButtonEl.addEventListener('click',()=>{
      navMenuEl.classList.toggle('open');
    })

})()