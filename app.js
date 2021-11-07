var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var output = document.querySelector("#output-txt");

var url = "	https://api.funtranslations.com/translate/emoji.json" + "?" + "text="

function UrlGenerator(text) {
    return url + text
}
console.log(txtInput)

btnTranslate.addEventListener("click", clickEventHandler)

function errorHAndler(error) {
    console.log("Error occurred", error);
}

function clickEventHandler() {
    var input = txtInput.value;


    fetch(UrlGenerator(input))
        .then(respone => respone.json())
        .then(json => {
            var translated = json.contents.translated;
            output.innerHTML = translated;

        })

        .catch(errorHAndler)


 









/*
"textarea"
".btn-primary"
"#input-btn"
""
*/