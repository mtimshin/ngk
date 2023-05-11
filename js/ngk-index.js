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

// Дропдаун у поиска
const dropdowns = document.querySelectorAll('.header-cont_search');
const dropdownToggles = document.querySelectorAll('.header-cont_search_toggle');
const dropdownCloses = document.querySelectorAll('.header-cont_search_close'); // получаем все элементы с крестиком

dropdownToggles.forEach(function(dropdownToggle, index) {
  dropdownToggle.addEventListener('click', function() {
    dropdowns[index].classList.toggle('open');
  });

  dropdowns[index].addEventListener('blur', function() {
    this.classList.remove('open');
  });
  
  dropdownCloses[index].addEventListener('click', function() { // добавляем обработчик события клика на элемент с крестиком
    dropdowns[index].classList.remove('open');
  });
});

document.querySelectorAll('.header-cont_search_toggle').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
  });
});



// Свайпер слайдеры
const firstscreenSlider = new Swiper('.slider-head__line', {
    navigation: {
        nextEl: '.slider-head_next',
        prevEl: '.slider-head_prev'
    },

    loop: true,
    slidesPerGroup: 1,
});

const catalogSlider = new Swiper('.catalog-home_swiper-container', {
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        900: {
            slidesPerView: 2,
        },
        1070: {
          slidesPerView: 4,
        },
    },
    loop: true,
    slidesPerGroup: 4,
});



const newsSlider = new Swiper('.news_swiper-container', {
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1069: {
          slidesPerView: 2,
        },
        1070: {
          slidesPerView: 4,
        },
    },
    loop: true,
    slidesPerGroup: 4,
});

const licenSlider = new Swiper('.licen_swiper-container', {
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1069: {
          slidesPerView: 2,
        },
        1070: {
          slidesPerView: 4,
        },
    },
    loop: true,
    slidesPerGroup: 4,
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
