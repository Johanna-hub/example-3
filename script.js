function manualRotation() {
  alert("Thank you for rotating!");
}

function orientationChangeHandler() {
  if (!window.matchMedia("(orientation: landscape)").matches) {
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
  alert("Rotate");
  window.removeEventListener("orientationchange", orientationChangeHandler);
}

function rotate() {
  window.addEventListener("orientationchange", thanks);
}

function ready() {
  const { type } = screen.orientation;
  console.log("Fullscreen and locked to ${type}. Ready!");
}

async function start() {
  await document.documentElement.requestFullscreen();
  await screen.orientation.lock("landscape");
  ready();
}

async function fullScreenCheck() {
  if (document.fullscreenElement === null) {
    await document.body.requestFullscreen();
  }
}

async function unlock() {
  await fullScreenCheck();
  await screen.orientation.unlock();
}

async function rotate() {
  const rotate = document.getElementById("rotate");
  await fullScreenCheck();
  const newOrientation = screen.orientation.type.startsWith("portrait")
    ? "landscape"
    : "portrait";
  await screen.orientation.lock(newOrientation);
  rotate.textContent = `Rotate to ${newOrientation}`;
}

function show() {
  const { type, angle } = screen.orientation;
  console.log(`Orientation type is ${type} & angle is ${angle}`);
}

screen.orientation.addEventListener("change", show);
window.addEventListener("load", show);
