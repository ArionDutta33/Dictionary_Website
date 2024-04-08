const form = document.querySelector("form");
const searchBtn = document.querySelector(".search-btn");
const word = document.querySelector(".input")
const description = document.querySelector(".description-box")
const warningBox = document.querySelector(".warning")

//api call
const getApi = async (wordSearch) => {
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearch}`)
    const response = await data.json();
    console.log(response)
    description.textContent = response[0].meanings[0].definitions[0].definition;


}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const wordSearch = word.value.trim();
    if (wordSearch === "") {
        warningBox.style.display = "block"
    }
    else {
        getApi(wordSearch);
    }

})