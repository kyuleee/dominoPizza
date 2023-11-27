const navMoreBtn=document.querySelector('.btn_more');
const subNav=document.querySelector('.sub_nav');
navMoreBtn.addEventListener('click',function(){
    subNav.classList.toggle('active');
});
