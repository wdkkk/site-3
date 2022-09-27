// adaptive menu
let btn__menu = document.getElementById('btn__menu');
let menu__list = document.getElementById('menu__list_ad');
let menu__line = document.getElementsByClassName('menu__line');
let menu__open;

btn__menu.onclick = function() {
  if (menu__open === undefined || menu__open == false) {
    menu__open = false;
    burger_open(menu__open);
    menu__open = true;
  }
    else {
      burger_open(menu__open);
      menu__open = false;
    }
}

function burger_open(x) {
  if (x === false) {
    menu__list.classList.add('__active');
    menu__line[0].classList.add('__active_line__first');
    menu__line[1].classList.add('__active_line__second');
    menu__line[2].classList.add('__active_line__third');
    document.body.classList.add('body__active');
    document.documentElement.classList.add('html__active');

  }
  else if (x === true) {
    menu__list.classList.remove('__active');
    menu__line[0].classList.remove('__active_line__first');
    menu__line[1].classList.remove('__active_line__second');
    menu__line[2].classList.remove('__active_line__third');
    document.body.classList.remove('body__active');
    document.documentElement.classList.remove('html__active');

  }
}
// adaptive menu


// accordions
$('#fz__acc').on('click', function() {
  $('.main__settings__fz__list').slideToggle();
  $('#fz__acc').addClass('__active');
});
$('#fz__acc_i').on('click', function() {
  $('.main__settings__fz__list').slideToggle();
});

$('#words__acc').on('click', function() {
  $('.main__settings__words__list').slideToggle();
  $('#words__acc').addClass('__active');
});
$('#words__acc_i').on('click', function() {
  $('.main__settings__words__list').slideToggle();
});
// accordions
