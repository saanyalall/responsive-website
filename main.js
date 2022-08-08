//change navbar styles on scroll

window.addEventListener('scroll',()=>{
    document.querySelector("nav").classList.toggle
    ('window-scroll',window-scrollY>100)
})
let faqs=document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
    })
})

const menu=document.querySelector(".nav-menu");
const menuBtn=document.querySelector("#open-menu-btn");
const closeBtn=document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',()=>{
    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";
})
//close navmenu 
closeBtn.addEventListener('click',()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
})