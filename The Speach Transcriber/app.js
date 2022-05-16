// https://caniuse.com/?search=speech%20recognition

const transcription = document.querySelector(".transcription");
let speechPara = document.createElement("p");

window.SpeachRecognition = window.SpeachRecognition || window.webkitSpeachRecognition;


const reconationSpeach = new window.SpeachRecognition();

reconationSpeach.addEventListener("result", (e) => {
    const speacText = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
    
    speechPara.innerText = speacText
    transcription.appendChild(speechPara)

    if (e.results[0].isFinal) {
        speechPara = document.createElement("p")
    }
})

reconationSpeach.addEventListener("end", () => {
    reconationSpeach.start();
})
reconationSpeach.start();