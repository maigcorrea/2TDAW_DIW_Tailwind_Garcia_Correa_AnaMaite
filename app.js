 //MENÚ HAMBURGUESA
 const menuBtn = document.getElementById('menu-btn');
 const closeBtn = document.getElementById('close-btn');
 const mobileMenu = document.getElementById('mobile-menu');

 menuBtn.addEventListener('click', () => {
     mobileMenu.classList.remove('-translate-x-full');
 });

 closeBtn.addEventListener('click', () => {
     mobileMenu.classList.add('-translate-x-full');
 });
