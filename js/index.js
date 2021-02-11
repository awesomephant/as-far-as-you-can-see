window.addEventListener("DOMContentLoaded", () => {
  if (navigator.appVersion.indexOf("Win") !== -1) {
    // Some light UA-Sniffing to adjust for font rendering
    document.body.classList.add("is-windows");
  }
});
