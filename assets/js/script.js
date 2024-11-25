/*--------------------------------------*
 * ハンバーガーメニューの表示・非表示
 *--------------------------------------*/ 

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.js-menu-toggle');
  const nav = document.querySelector('.c-nav');
  const overlay = document.querySelector('.c-overlay');
  const navLinks = document.querySelectorAll('.c-nav__link');

  menuToggle.addEventListener('click', function() {
    nav.style.display = 'flex';
    overlay.style.display = 'block';
  });

  overlay.addEventListener('click', function() {
    nav.style.display = 'none';
    overlay.style.display = 'none';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.getComputedStyle(menuToggle).display !== 'none') {
        nav.style.display = 'none';
        overlay.style.display = 'none';
      }
    });
  });
});


/*--------------------------------------*
 * トップページのヘッダーナビクリック時のアニメーション
 *--------------------------------------*/ 
document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.c-nav__link--index').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

/*--------------------------------------*
 * トップページのフッターナビクリック時のアニメーション
 *--------------------------------------*/ 
document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.l-footer__nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});