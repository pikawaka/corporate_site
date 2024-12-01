/*--------------------------------------*
 * トップページのフッターナビクリック時のアニメーション
 *--------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.js-footer_scroll').forEach(link => {
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
