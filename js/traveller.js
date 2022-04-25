window.addEventListener('scroll',()=>{
    // pegando o menu do html e passando para o js
    const header= document.querySelector(".header");
    // no header iremos adicionar uma classe CSS quando o scroll maior que 80
    // scrool >= 80 colocaca CSS <= 80 tira CSS
    header.classList.toggle('scroll__active',window.scrollY > 50);
})
const hamburguer = document.querySelector('.hamburguer');
   const navLinks = document.querySelector('.links__menu');  
   hamburguer.addEventListener('click', () =>{
    navLinks.classList.toggle('open');
   });

function aumenta(){
    let el = document.querySelector('html');
    // alterando uma propriedade
    el.style.fontSize = '18px';
}
function aumentaMais(){
    let el = document.querySelector('html');
    // alterando uma propriedade
    el.style.fontSize = '20px';
}
function padrao(){
    let el = document.querySelector('html');
    // alterando uma propriedade
    el.style.fontSize = '16px';
}
function diminui(){
    let el = document.querySelector('html');
    // alterando uma propriedade
    el.style.fontSize = '14px';
}
function dislexia(){
    let el = document.querySelector('html');
    // alterando uma propriedade
    el.style.fontFamily  = 'Douglas';
    el.style.fontSize    = '14px';
}
function roboto(){
    let el = document.querySelector('html');
    // alterando uma propriedade
    el.style.fontFamily  = 'Roboto', sans-serif;
    padrao();
}
function contraste(){
    let el = document.querySelector('body');
    el.style.background = '#000000';
    el.style.color = '#ffffff';

    let xl = document.querySelector(".banner");
    xl.style.backgroundImage='';

}