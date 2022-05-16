const checkbox = document.querySelector('input[name="theme"]');
const htmlElement = document.documentElement;

checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
        htmlElement.classList.add("transition")
        htmlElement.setAttribute("data-theme", "dark")
    } else {
        htmlElement.classList.remove("transition")
        htmlElement.setAttribute("data-theme", "ligth");
    }
})