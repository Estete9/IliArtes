const mobileMenBtn = document.querySelector('header nav img');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('menu');
const menuItems = Array.from(document.querySelectorAll('#menu a'));

function openMobileMenu() {
  menu.className = 'mobile';

  for (let id = 0; id < menuItems.length; id += 1) {
    const menuItem = menuItems[id];
    menuItem.className = 'mobile';
  }
}

function closeMobileMenu() {
  menu.className = '';

  for (let id = 0; id < menuItems.length; id += 1) {
    const menuItem = menuItems[id];
    menuItem.className = '';
  }
}

mobileMenBtn.addEventListener('click', openMobileMenu);
closeBtn.addEventListener('click', closeMobileMenu);
