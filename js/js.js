<script>
  document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.querySelector('.menu-button');
    var menuClose = document.querySelector('.menu-close');
    var menuMobile = document.querySelector('.menu-mobile');

    // Открыть меню
    menuButton.addEventListener('click', function() {
      menuMobile.style.top = '0';
    });

    // Закрыть меню при клике на кнопку закрытия
    menuClose.addEventListener('click', function() {
      menuMobile.style.top = '-100%';
    });

    // Закрыть меню при клике вне его области
    document.addEventListener('click', function(event) {
      if (!menuMobile.contains(event.target) && event.target !== menuButton) {
        menuMobile.style.top = '-100%';
      }
    });
  });
</script>
