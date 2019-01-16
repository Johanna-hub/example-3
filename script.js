// function manualRotation() {
//   alert("Thank you for rotating!");
// }

// async function goFullScreen() {
//     if(document.fullscreenElement === null) {
//         await document.documentElement.requestFullscreen();
//     }
// }

// function orientationChangeHandler() {
//   if (window.matchMedia("(orientation: portrait)").matches) {
//     return;
//   }
//   screen.orientation.removeEventListener("change", orientationChangeHandler);
//   manualRotation();
// }

// async function start() {

//   if (document.fullscreenElement) {
//     try {
//       await screen.orientation.lock("landscape");
//     } catch {
//       alert("To start, please rotate your screen to landscape");
//       screen.orientation.addEventListener("change", orientationChangeHandler);
//     }
//   }
// }

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
  window.screen.orientation.removeEventListener("change", orientationChangeHandler);
  manualRotation();
}

async function start() {
  await goFullScreen();
  alert("To start, please rotate your screen to landscape");
  window.screen.orientation.addEventListener("change", orientationChangeHandler);
}

function thanks(){
    alert("Thanks");
}

function rotate() {
    window.addEventListener("orientationchange", thanks)
}
