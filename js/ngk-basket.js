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
