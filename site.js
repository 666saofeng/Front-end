"use strict";
(function(){

    const accodionEl = document.querySelector('.accordin');
    accodionEl.addEventListener('click',(event) => {
        if(!event.target.classList.contains('topic')){
            return;
        }

        event.target.classList.toggle('topic-open');


    });

})()