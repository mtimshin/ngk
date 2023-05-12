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
const dropdowns = document.querySelectorAll('.popup_menu__dropdown');
const dropdownToggles = document.querySelectorAll('.popup_menu__dropdown-toggle');

dropdownToggles.forEach(function(dropdownToggle, index) {
  dropdownToggle.addEventListener('click', function() {
    dropdowns[index].classList.toggle('open');
  });

  dropdowns[index].addEventListener('blur', function() {
    this.classList.remove('open');
  });
});

document.querySelectorAll('.popup_menu__dropdown-toggle').forEach(function(link) {
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
        clickable: false,
    },
    breakpoints: {
        1069: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1070: {
          slidesPerView: 4,
        },
    },
    loop: true,
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
          slidesPerGroup: 1,
        },
        1070: {
          slidesPerView: 4,
        },
    },
    loop: true,
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
          slidesPerGroup: 1,
        },
        1070: {
          slidesPerView: 4,
        },
    },
    loop: true,
});




