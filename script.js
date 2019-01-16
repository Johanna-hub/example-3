function manualRotation() {
  alert("Thank you for rotating!");
}

async function goFullScreen() {
  if (document.fullscreenElement === null) {
    await document.documentElement.requestFullscreen();
  }
}

function orientationChangeHandler() {
  if (window.matchMedia("(orientation: portrait)").matches) {
    return;
  }
  window.removeEventListener("orientationchange", orientationChangeHandler);
  manualRotation();
}

async function start() {
  try {
    await screen.orientation.lock("landscape");
  } catch {
    alert("To start, please rotate your screen to landscape");
    window.addEventListener("orientationchange", orientationChangeHandler);
  }
}

function thanks() {
  alert("Rotated");
  window.removeEventListener("orientationchange", orientationChangeHandler);
}

function rotate() {
  window.addEventListener("orientationchange", thanks);
}
