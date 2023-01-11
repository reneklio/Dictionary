function doSearch(event) {
    event.preventDefault();
    let search = document.querySelector("#form-input").value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
        .then(response => {
            return response.json();

        })
        .then(response => {
            displaySearchInfo(response);
        }
        );
}



function doRandomSearch(event) {
    event.preventDefault();
    let randomList = ["pug", "flower", "home", "duck", "soup", "book", "yoga", "dance", "love", "table", "planet"];
    let randomSearch = randomList[Math.floor(Math.random() * randomList.length)];
    console.log(randomSearch);

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomSearch}`)
        .then(response => {
            return response.json();
        })
        .then(
            response => {
                displaySearchInfo(response);
            }
        );
}



function displaySearchInfo(response) {
    document.querySelector("#search-word").innerHTML = response[0].word;
    document.querySelector("#search-phonetic").innerHTML = response[0].phonetic;
    document.querySelector("#search-part-language").innerHTML = response[0].meanings[0].partOfSpeech;
    document.querySelector("#search-synonyms").innerHTML = response[0].meanings[0].synonyms;
    document.querySelector("#search-definition-1").innerHTML = response[0].meanings[0].definitions[0].definition;
    document.querySelector("#search-definition-2").innerHTML = response[0].meanings[0].definitions[1].definition;
    document.querySelector("#search-definition-3").innerHTML = response[0].meanings[0].definitions[2].definition;
    document.querySelector("#search-definition-4").innerHTML = response[0].meanings[0].definitions[3].definition;
    document.querySelector("#search-wiki").setAttribute("href", response[0].sourceUrls[0]);
};



function addListeners() {
    let searchButton = document.querySelector("form");
    searchButton.addEventListener("submit", doSearch);

    let randomButton = document.querySelector("#form-btn-random");
    randomButton.addEventListener("click", doRandomSearch);

}



addListeners();






