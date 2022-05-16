// http://numbersapi.com/

const factBtn = document.querySelector("button");
const factInput = document.querySelector("input");
const factPara = document.querySelector("p");

factBtn.addEventListener("click", () => {
    const number = factInput.value
    const numberfact = parseInt(number)
    console.log(typeof numberfact);

    fetchFact(numberfact)
})

async function fetchFact(number) {
    const fectURL = "http://numbersapi.com/"
    const proxyURL = "https://cors-anywhere.herokuapp.com/"
    const response = await fetch(`${proxyURL}${fectURL}${number}`, {
        method: "GET",
        headers: {
            "x-requested-with": "text/plain",
        },
    });
   
    const responseData = await response.text();
    factPara.innerText = responseData
}