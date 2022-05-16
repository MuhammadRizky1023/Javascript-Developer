const handleBtn = document.querySelector(".toggle-btn")
const mainHeader = document.querySelector(".main-header")
const overlay = document.querySelector(".overlay")

handleBtn.addEventListener("click", function () {
    handleBtn.classList.toggle("open");
    overlay.classList.toggle("open");
    mainHeader.classList.toggle("open");
})