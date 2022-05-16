const mouseCursor = document.querySelector(".cursor");

const navLinks = document.querySelectorAll(".nav-links li");


window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
}

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mouseCursor.classList.remove("link-grow");
        link.classList.add("hovered-link");
    });
    link.addEventListener("mousemove", function () {
        mouseCursor.classList.add("link-grow");
        link.classList.remove("hovered-link");
    })
})