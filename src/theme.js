// class="dark-theme"
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const swichToggle = document.querySelector("#theme-switch-toggle");
const bodyEl = document.querySelector("body");

swichToggle.addEventListener("change", onSwich);

bodyEl.setAttribute("class", localStorage.getItem("Theme"));

function checkToggle(e) {
  if (localStorage.getItem("Theme") === Theme.DARK) {
    return (e.target.checked = true);
  }
}

console.log(localStorage.getItem("Theme"));
console.log(Theme.DARK);

function onSwich(e) {
  console.log("t", e.target.checked);

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
