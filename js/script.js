const toggleButton = document.getElementById('mode-switch');
const body = document.querySelector('body');

toggleButton.addEventListener('click', () => {
    console.log("clicked");
    body.classList.toggle('dark-mode');
});