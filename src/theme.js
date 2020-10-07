// class="dark-theme"
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const swichToggle = document.querySelector("#theme-switch-toggle");
const bodyEl = document.querySelector("body");

swichToggle.addEventListener("change", onSwich);

function onSwich(e) {
  console.log("cT", e.currentTarget.checked);
  console.log("t", e.target.checked);

  if (e.target.checked === true) {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
  }
  if (e.target.checked === false) {
    bodyEl.classList.add(Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);
  }
}
