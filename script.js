var start = function() {
    screen.orientation.lock('portrait').then(
      function() {
        alert('To start, rotate your screen to landscape.');

        var orientationChangeHandler = function() {
          if (!screen.orientation.type.startsWith('portrait')) {
            return;
          }
          screen.orientation.removeEventListener('change', orientationChangeHandler);
        }

        screen.orientation.addEventListener('change', orientationChangeHandler);
      })
  }
window.onload = start;
