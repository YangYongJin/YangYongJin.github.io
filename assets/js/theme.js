// Has to be in the head tag, otherwise a flicker effect will occur.
let initTheme = (theme) => {
  if (theme == null) {
    // Default to light theme instead of following system preference
    theme = "light";
  }

  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  localStorage.setItem("theme", theme);
};

initTheme(localStorage.getItem("theme"));
