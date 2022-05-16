const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".indicator").children;

for (let i = 0; i < indicatorImages.length; i++) {
    indicatorImages[i].addEventListener("click", function () {
        for (let j = 0; j < indicatorImages.length; j++) {
            indicatorImages[j].classList.remove("active");
        }
        indicatorImages[i].classList.add("active");

        const id = indicatorImages[i].getAttribute("data-id");
        for (let d = 0; d < slides.length; d++){
            slides[d].classList.remove("active");
        }
        slides[id].classList.add("active");
    })
}