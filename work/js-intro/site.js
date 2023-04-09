"use strict";
(function(){
    // console.log("Hello World");
    const menu_button = document.querySelector(".menu_button");
    const  dropdown_menu = document.querySelector(".dropdown_menu");

    menu_button.addEventListener("click",function(){

        dropdown_menu.classList.toggle("open");
        
    })
    
}) ()