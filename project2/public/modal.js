"use strict";
(function(){

const modalEl1 = document. querySelector ('.card__modal1');
const openEl1 = document.querySelector ('.card__subsribe1') ; 
const closeEl1 = document. querySelector ('.modal__close1' );
const modalEl2 = document. querySelector ('.card__modal2');
const openEl2 = document.querySelector ('.card__subsribe2') ; 
const closeEl2 = document. querySelector ('.modal__close2' );
const modalEl3 = document. querySelector ('.card__modal3');
const openEl3 = document.querySelector ('.card__subsribe3') ; 
const closeEl3 = document. querySelector ('.modal__close3' );
const modalEl4 = document. querySelector ('.card__modal4');
const openEl4 = document.querySelector ('.card__subsribe4') ; 
const closeEl4 = document. querySelector ('.modal__close4' );
const modalEl5 = document. querySelector ('.card__modal5');
const openEl5 = document.querySelector ('.card__subsribe5') ; 
const closeEl5 = document. querySelector ('.modal__close5' );
const modalEl6 = document. querySelector ('.card__modal6');
const openEl6 = document.querySelector ('.card__subsribe6') ; 
const closeEl6 = document. querySelector ('.modal__close6' );
openEl1.addEventListener('click', () => {
    modalEl1. showModal() ;
});

closeEl1. addEventListener('click', () => {
    modalEl1.close();
});


openEl2.addEventListener('click', () => {
    modalEl2. showModal() ;
});

closeEl2. addEventListener('click', () => {
    modalEl2.close();
});



openEl3.addEventListener('click', () => {
    modalEl3. showModal() ;
});

closeEl3. addEventListener('click', () => {
    modalEl3.close();
});


openEl4.addEventListener('click', () => {
    modalEl4. showModal() ;
});

closeEl4. addEventListener('click', () => {
    modalEl4.close();
});

openEl5.addEventListener('click', () => {
    modalEl5. showModal() ;
});

closeEl5. addEventListener('click', () => {
    modalEl5.close();
});


openEl6.addEventListener('click', () => {
    modalEl6. showModal() ;
});

closeEl6. addEventListener('click', () => {
    modalEl6.close();
});
})()