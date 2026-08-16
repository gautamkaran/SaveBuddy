// SaveBuddy docs - light/dark color scheme handling.
// Restores the saved (or system) theme before the page renders, and
// exposes `toggleTheme` for the button in `_includes/header_custom.html`.
// Loaded from `_includes/head_custom.html` as an external file so that
// just-the-docs' HTML compression cannot mangle it (it strips newlines
// from inline scripts, which would turn the `//` comments below into one
// giant comment and disable the toggle).

(function () {
  var STORAGE_KEY = "savebuddy-theme";
  var saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) {}

  var theme =
    saved === "light" || saved === "dark"
      ? saved
      : window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

  document.documentElement.setAttribute("data-theme", theme);

  if (window.jtd && typeof window.jtd.setTheme === "function") {
    var current = window.jtd.getTheme ? window.jtd.getTheme() : null;
    // "default" is the theme's built-in stylesheet (light). Only swap when
    // the active scheme differs, to avoid a redundant stylesheet download.
    if (current !== theme) {
      window.jtd.setTheme(theme);
    }
  }

  window.toggleTheme = function () {
    var current = window.jtd ? window.jtd.getTheme() : null;
    var next = current === "dark" ? "light" : "dark";
    if (window.jtd && typeof window.jtd.setTheme === "function") {
      window.jtd.setTheme(next);
    }
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {}
  };
})();
