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


// Слайдер Просмотренные товары 

const viewSlider = new Swiper('.view_swiper-container', {
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

