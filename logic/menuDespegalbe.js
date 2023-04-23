const headerMenuButton = document.querySelector('.header-menu');
const headerNavMenu = document.querySelector('.header-nav-menu');

headerMenuButton.addEventListener('click', function() {
  headerNavMenu.classList.toggle('active');
  if (headerNavMenu.classList.contains('active')) {
    headerNavMenu.style.display = 'block';
  } else {
    headerNavMenu.style.display = 'none';
  }
});