(function () {
  var button = document.querySelector('.theme-toggle');

  if (!button) {
    return;
  }

  var storageKey = 'theme';
  var storedTheme = window.localStorage.getItem(storageKey);
  var isDark = storedTheme ? storedTheme === 'dark' : document.body.classList.contains('dark');

  function updateTheme(dark) {
    document.body.classList.toggle('dark', dark);
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    button.setAttribute('data-theme', dark ? 'dark' : 'light');
  }

  updateTheme(isDark);

  button.addEventListener('click', function () {
    isDark = !isDark;
    window.localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
    updateTheme(isDark);
  });
}());
