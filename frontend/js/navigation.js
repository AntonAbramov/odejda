export default (() => {

  let triggerBtn;
  let nav;

  let init = () => {
    _cacheDom();
    _bindEvents();
  }

  function _cacheDom() {
    triggerBtn = document.getElementById('navbar-toggle');
    nav = document.getElementById('top-nav');
  }

  function _bindEvents() {
    triggerBtn.addEventListener('click', _toggleNav);
  }

  function _toggleNav(e) {
    e.preventDefault();
    if (nav.className === 'top-nav') {
      nav.className = nav.className + ' is-open';
    } else {
      nav.className = 'top-nav';
    }
  }


  return {
    init: init
  }
})();