const ham =document.querySelector('.ham');
const nav = document.querySelector('.nav');
ham.addEventListener('click',()=>{
    ham.classList.toggle('transform');
    nav.classList.toggle('show_menu')
})