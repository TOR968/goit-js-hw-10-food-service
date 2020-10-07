// class="dark-theme"
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const swichToggle = document.querySelector("#theme-switch-toggle");
const bodyEl = document.querySelector("body");

swichToggle.addEventListener("change", onSwich);

bodyEl.setAttribute("class", localStorage.getItem("Theme"));

if (localStorage.getItem("Theme") === Theme.DARK) {
  swichToggle.checked = true;
}

function onSwich(e) {
  if (e.target.checked === true) {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
  }
  if (e.target.checked === false) {
    bodyEl.classList.add(Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);
  }

  localStorage.setItem("Theme", bodyEl.getAttribute("class"));
}
