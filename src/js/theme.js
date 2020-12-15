const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
console.log(body);
const checkbox = document.querySelector('#theme-switch-toggle');
console.dir(checkbox);
console.log(checkbox.checked);

checkbox.addEventListener('change', changeTheme);

const replaceTheme = (oldTheme, newTheme) => {
  body.classList.add(newTheme);
  body.classList.remove(oldTheme);
  localStorage.setItem('theme', newTheme);
};

function changeTheme(e) {
  if (e.target.checked) {
    replaceTheme(Theme.LIGHT, Theme.DARK);
  } else {
    replaceTheme(Theme.DARK, Theme.LIGHT);
  }
}
const currentTheme = localStorage.getItem('theme');
console.log(currentTheme);

function saveTheme() {
  if (currentTheme === Theme.DARK) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    checkbox.checked = true;
  }
}
saveTheme();
