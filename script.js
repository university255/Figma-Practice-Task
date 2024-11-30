document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('about-popup');
    var aboutLink = document.getElementById('about-link');
    var closeButton = document.querySelector('.close-button');
  
    // Открытие всплывающего окна
    aboutLink.onclick = function(event) {
      event.preventDefault();
      popup.classList.add('show');
    };
  
    // Закрытие всплывающего окна по кнопке
    closeButton.onclick = function() {
      popup.classList.remove('show');
    };
  
    // Закрытие всплывающего окна при клике вне его
    window.onclick = function(event) {
      if (event.target == popup) {
        popup.classList.remove('show');
      }
    };
  });
  