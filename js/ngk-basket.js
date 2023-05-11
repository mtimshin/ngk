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



// Работа плюса и минуса в полях с кол-вом
const countInputs = document.querySelectorAll(".count_i");
const minusButtons = document.querySelectorAll(".count_m");
const plusButtons = document.querySelectorAll(".count_p");

for (let i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener("click", function() {
    var count = parseInt(countInputs[i].value);
    if (count > 1) {
      countInputs[i].value = count - 1;
    }
  });
}

for (let i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener("click", function() {
    var count = parseInt(countInputs[i].value);
    countInputs[i].value = count + 1;
  });
}

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