const toggleButton = document.getElementById("toggle-check");
const body = document.querySelector("body");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
