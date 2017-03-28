import navigation from './navigation';
import Swipe from './swipe';

let slider;
let nextBtn;
let prevBtn;
let navItems;
let navItemsLength;

function _cacheDom() {
  nextBtn = document.getElementById('next');
  prevBtn = document.getElementById('prev');
  navItems = document.querySelectorAll('.slider__pagination__item');
  navItemsLength = navItems.length;
}

function _bindEvents() {
  nextBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    let el = e.currentTarget;
    if (el.hasAttribute('disabled')) {
      return
    } else {
      el.setAttribute('disabled', 'disabled');
      slider.next();
      setTimeout(()=>{
        el.removeAttribute('disabled');
      }, 2000)
    }

  });

  prevBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    let el = e.currentTarget;
    if (el.hasAttribute('disabled')) {
      return
    } else {
      el.setAttribute('disabled', 'disabled');
      slider.prev();
      setTimeout(()=>{
        el.removeAttribute('disabled');
      }, 2000)
    }
  });

  for (let i=0; i < navItemsLength; i++ ) {
    navItems[i].addEventListener('click', (event)=>{
      let el = event.currentTarget;
      event.preventDefault();

      if (el.className !== 'slider__pagination__item is-active') {
        slider.slide(el.getAttribute('data-idx'), 400);
      }

    })
  }

  document.addEventListener('keydown', (event)=>{
    if(event.keyCode === 37) {
      prevBtn.click()
    } else if (event.keyCode === 39) {
      nextBtn.click()
    }
  })
}

function _render() {
  slider = Swipe(document.getElementById('slider'), {
    startSlide: 0,
    speed: 400,
    auto: 2000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    callback: function(index, elem) {
      if (document.querySelector('.slider__pagination__item.is-active')) {
        document.querySelector('.slider__pagination__item.is-active').className = 'slider__pagination__item';
      }
      navItems[index].className += ' is-active';
    },
    transitionEnd: function(index, elem) {

    }
  });
}

export default  (() => {
  function init () {
    _cacheDom();
    _bindEvents();
    _render();
  }

  return {
    init : init
  };
})();
