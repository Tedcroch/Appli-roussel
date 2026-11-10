const toggleMenu = document.querySelector('nav button');
const menu = document.querySelector('.menu-principal');

toggleMenu.addEventListener('click', function () {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;

  if (!menu.hidden) {
    menu.querySelector('a').focus();
  }
});
// CF :Burger menu responsive ressource : https://polypane.app/blog/the-perfect-responsive-menu/