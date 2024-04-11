console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkMode = document.querySelector('[data-js="dark-mode-button"]');
darkMode.addEventListener("click", () => {
  console.log("Dark Mode selected");
  bodyElement.classList.add("dark");
});

const lightMode = document.querySelector('[data-js="light-mode-button"]');
lightMode.addEventListener("click", () => {
  console.log("Light Mode selected");
  bodyElement.classList.remove("dark");
});

const toggle = document.querySelector('[data-js="toggle-button"]');
toggle.addEventListener("click", () => {
  console.log("Toggle Mode selected");
  bodyElement.classList.toggle("dark");
});
