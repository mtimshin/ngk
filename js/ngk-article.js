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



// Работа input file
const input = document.querySelector('.input-file input[type=file]');
input.addEventListener('change', function() {
  const file = this.files[0];
  this.closest('.input-file').querySelector('.input-file-text').innerHTML = file.name;
});


// Свайпер слайдер
const articleSlider = new Swiper('.article__swiper-container', {
  navigation: {
      nextEl: '.slider-article_next',
      prevEl: '.slider-article_prev'
  },
  pagination: {
      el: '.swiper-pagination_article',
      clickable: true,
  },
  breakpoints: {
      900: {
          slidesPerView: 1,
      },
      1070: {
        slidesPerView: 1,
      },
  },
  loop: true,
  slidesPerGroup: 1,
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
