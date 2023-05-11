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
const countInput = document.querySelector(".count_i");
const minusButton = document.querySelector(".count_m");
const plusButton = document.querySelector(".count_p");

minusButton.addEventListener("click", function() {
  var count = parseInt(countInput.value);
  if (count > 1) {
    countInput.value = count - 1;
  }
});

plusButton.addEventListener("click", function() {
  var count = parseInt(countInput.value);
  countInput.value = count + 1;
});


// Табы на странице товара
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("active");
    }
    tablinks = document.querySelectorAll(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
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
