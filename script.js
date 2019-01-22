function manualRotation() {
  alert("Thank you for rotating!");
}

function orientationChangeListener() {
  const inPortrait = window.matchMedia("(orientation: portrait)");
  function detectOrientation(e) {
    if (e.matches) {
      return;
    } else {
      window.removeEventListener(
        "orientationchange",
        orientationChangeListener
      );
      inPortrait.removeListener(detectOrientation);
      manualRotation();
    }
  }
  inPortrait.addListener(detectOrientation);
}

async function start() {
  try {
    await screen.orientation.lock("landscape");
  } catch {
    window.addEventListener("orientationchange", orientationChangeListener);
    alert("To start, please rotate your screen to landscape");
  }
}

function thanks() {
  alert("Rotate");
  window.removeEventListener("orientationchange", orientationChangeListener);
}

function rotate() {
  window.addEventListener("orientationchange", thanks);
}

function final() {
  /* Start application when in correct orientation */
}
async function start2() {
  try {
    await screen.orientation.lock("landscape");
    final();
  } catch (err) {
    console.error(err);
  }
  const matchLandscape = matchMedia("(orientation: landscape)");
  if (matchLandscape.matches) return final(); 
  addEventListener("orientationchange", function listener() {
    matchPortrait.addListener(function mediaChange(e) {
      if (!e.matches) return; // Nope, not landscape!
      removeEventListener("orientationchange", listener);
      matchPortrait.removeListener(mediaChange);
      final();
    });
  });
  alert("To start, please rotate your screen to landscape.");
}