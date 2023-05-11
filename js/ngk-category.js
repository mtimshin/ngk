// Прилипающее меню

const stickyBlock = document.querySelector('.top-sticky');

window.addEventListener('scroll', function() {
  if (window.innerWidth > 1070) { // проверяем ширину экрана
    if (window.pageYOffset > 300) {
      stickyBlock.style.display = 'block';
    } else {
      stickyBlock.style.display = 'none';
    }
  } else {
    stickyBlock.style.display = 'none'; // скрываем блок при ширине меньше 1070
  }
});



// Дропдаун у бренда
const dropdowns = document.querySelectorAll('.brands__dropdown');
const dropdownToggles = document.querySelectorAll('.brands__dropdown-toggle');

dropdownToggles.forEach(function(dropdownToggle, index) {
  dropdownToggle.addEventListener('click', function() {
    dropdowns[index].classList.toggle('open');
  });

  dropdowns[index].addEventListener('blur', function() {
    this.classList.remove('open');
  });
});

document.querySelectorAll('.brands__dropdown-toggle').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
  });
});

// Меню бургер (для мобильного)
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const menuList = document.querySelector('.menu-list');
const overlay = document.querySelector('.overlay'); // добавлено

menuBtn.addEventListener('click', () => {
  menuList.style.display = 'flex';
  closeBtn.style.display = 'block';
  overlay.style.display = 'block'; // добавлено
});

closeBtn.addEventListener('click', () => {
  menuList.style.display = 'none';
  closeBtn.style.display = 'none';
  overlay.style.display = 'none'; // добавлено
});

overlay.addEventListener('click', () => { // добавлено
  menuList.style.display = 'none';
  closeBtn.style.display = 'none';
  overlay.style.display = 'none';
});

const button = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-list');

button.addEventListener('click', () => {
  menu.classList.toggle('hide');
});

menu.addEventListener('animationend', () => {
  if (menu.classList.contains('hide')) {
    menu.style.display = 'none';
  }
});