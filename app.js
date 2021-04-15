navBtn=document.getElementById('nav-btn');
closeBtn=document.getElementById('close-btn');
navBar=document.getElementById('navbar');

navBtn.addEventListener('click',()=>{
 navBar.classList.add('showNav');
});
closeBtn.addEventListener('click',()=>{
 navBar.classList.remove('showNav');
});

// navBar.addEventListener('mouseout',()=>{
//  navBar.classList.remove('showNav');
// })
