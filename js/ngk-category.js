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

// Прилипающее меню моб
const header = document.querySelector('.header-mob');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}); 

// Дропдаун у меню моб
const dropdownElements = document.querySelectorAll('.popup_menu__dropdown');
const toggleButtons = document.querySelectorAll('.popup_menu__dropdown-toggle');

for(let i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener('click', function() {
    dropdownElements[i].classList.toggle('open');
  });

  dropdownElements[i].addEventListener('blur', function() {
    this.classList.remove('open');
  });
}

const links = document.querySelectorAll('.popup_menu__dropdown-toggle');
for(let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    event.preventDefault();
  });
}
