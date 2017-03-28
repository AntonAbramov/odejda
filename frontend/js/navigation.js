export default (() => {

  let triggerBtn;
  let header;

  let init = () => {
    _cacheDom();
    _bindEvents();
  }

  function _cacheDom() {
    triggerBtn = document.getElementById('navbar-toggle');
    header = document.getElementById('header');
  }

  function _bindEvents() {
    triggerBtn.addEventListener('click', _toggleNav);
  }

  function _toggleNav(e) {
    e.preventDefault();
    if (header.className === 'header') {
      header.className += ' is-nav-open';
    } else {
      header.className = 'header';
    }
  }


  return {
    init: init
  }
})();