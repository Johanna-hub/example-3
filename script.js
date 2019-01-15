function manualRotation(){
    alert("Thank you for rotating!")
}

async function start() {
    try {
        await screen.orientation.lock('landscape')
        } 

    catch  {
      alert("To start, rotate your screen to landscape")
      function orientationChangeHandler() {
        if (!screen.orientation.type.startsWith('landscape')) {
          return;
        }
        screen.orientation.removeEventListener('change', orientationChangeHandler);
        manualRotation();
      }
      screen.orientation.addEventListener('change', orientationChangeHandler);
    }
  }

  window.onload = start;
