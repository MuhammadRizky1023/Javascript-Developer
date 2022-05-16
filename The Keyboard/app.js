const keyboardContainer = document.querySelectorAll(".keys");
let textArea = document.querySelector(".display-textarea");

keyboardContainer.forEach(function (key) {
    key.addEventListener("click", function (e) {

        if (!e.path[0].value) return;

        let keyClicked = e.path[0].value.toLowerCase();
        textArea.value += keyClicked
    })
})