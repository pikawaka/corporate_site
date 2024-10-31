/*--------------------------------------*
 * ハンバーガーメニューの表示・非表示
 *--------------------------------------*/ 

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.js-menu-toggle');
  const nav = document.querySelector('.c-nav');
  const overlay = document.querySelector('.c-overlay');

  menuToggle.addEventListener('click', function() {
    nav.style.display = 'flex';
    overlay.style.display = 'block';
  });

  overlay.addEventListener('click', function() {
    nav.style.display = 'none';
    overlay.style.display = 'none';
  });
});


/*--------------------------------------*
 * トップページのナビクリック時のアニメーション
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