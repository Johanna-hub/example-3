function manualRotation() {
  alert("Thank you for rotating!");
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
    window.addEventListener("orientationchange", orientationChangeHandler);
    alert("To start, please rotate your screen to landscape");
  }
}

function thanks() {
  alert("Rotated");
  window.removeEventListener("orientationchange", orientationChangeHandler);
}

function rotate() {
  window.addEventListener("orientationchange", thanks);
}
