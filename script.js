async function start() {
    try {
      await screen.orientation.lock('landscape')
    } catch {
      alert('To start, rotate your screen')
    }
  }

  window.onload = start;
>>>>>>> try/catch
