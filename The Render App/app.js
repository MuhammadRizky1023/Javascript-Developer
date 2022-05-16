const textDisplay= document.querySelector("#text")
const speedButton = document.querySelector("#speed")
const readButton = document.querySelector(".read")
const pauseButton = document.querySelector(".pause")
const stopButton = document.querySelector(".stop")
let currentChar;

readButton.addEventListener("click", function () {
    readText(textDisplay.value)
})

pauseButton.addEventListener("click", pauseText)

stopButton.addEventListener("click", stopText)

speedButton.addEventListener("input", function () {
    stopText()
    readText(utterance.text.substring(currentChar))
})

const utterance = new SpeechSynthesisUtterance();

utterance.addEventListener("end", function () {
    textDisplay.disabled = false;
})

utterance.addEventListener("boundary", function (e) {
    currentChar = e.charIndex
})
function readText(text) {
    if (speechSynthesis.pause && speechSynthesis.speaking) {
        return speechSynthesis.resume
    }
    if (speechSynthesis.speaking) return;
    utterance.text = text;
    utterance.rate = speedButton.value || 1
    textDisplay.disabled = true
    speechSynthesis.speak(utterance);
}

function pauseText() {
    if (speechSynthesis.speaking) speechSynthesis.pause();
}

function stopText() {
    speechSynthesis.resume();
    speechSynthesis.cancel()
}