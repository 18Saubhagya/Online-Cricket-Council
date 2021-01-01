const navslide = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navlinks');

  const navlinks = document.querySelectorAll('.navlinks li');

  burger.addEventListener('click',() =>{
    nav.classList.toggle('navactive');

    navlinks.forEach((link,index) =>{
      if (link.style.animation){
        link.style.animation='';
      }
      else{
        link.style.animation='navLinkFade 0.5s ease forwards ${index/4+0.3}s';
      }
    });
    burger.classList.toggle('toggle');
  });
}

const navslide1 = () =>{
  const na = document.querySelectorAll('.navlinks li .na');
  const nav1 = document.querySelector('.navlinks');
const burger1 = document.querySelector('.burger');
  na.forEach((link,index) =>{
  link.addEventListener('click',() =>{
    nav1.classList.toggle('navactive');
    burger1.classList.toggle('toggle');
  });
});
}

navslide();
navslide1();
