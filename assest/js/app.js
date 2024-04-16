const ham =document.querySelector('.ham');
const nav = document.querySelector('.nav');
ham.addEventListener('click',()=>{
    ham.classList.toggle('transform');
    nav.classList.toggle('show_menu')
})

window.addEventListener("mousemove", (event) => {
    const cursor =document.querySelector('.cursor');
    cursor.style.left = event.pageX + 'px';
    cursor.style.top = event.pageY + 'px';
});