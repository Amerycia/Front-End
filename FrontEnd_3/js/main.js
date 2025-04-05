document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');
  
    burger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  });
  