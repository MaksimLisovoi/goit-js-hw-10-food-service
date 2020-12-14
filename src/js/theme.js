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

function changeTheme(e) {
  if (e.target.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
const currentTheme = localStorage.getItem('theme');
console.log(currentTheme);

function saveTheme() {
  if (currentTheme === Theme.DARK) {
    body.classList.add(Theme.DARK);
    checkbox.checked = true;
  }
}
saveTheme();
