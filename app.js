var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}
// function clickHandler(){
// //   outputdiv.innerText = "translated" + txtInput.value;
// var inputText = txtInput.value;

// fetch(getTranslationURL(inputText))
// .then(response =>response.json())
// .then(json =>{
//     var translatedText = json.contents.translated;
//     outputdiv.innerText = translatedText;})  
// };

var url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
function clickHandler(url, callback) {
    var questions;
    fetch(url)
        .then(response => response.json())
        .then(data => questions = data.results)
        .then(() => callback(questions))
    // console.log("q",questions)
}

const getData=(questions)=>{
        questions.forEach((x,i) => { console.log("Q",i+1," ",x) })
    };

    btnTranslate.addEventListener("click", clickHandler(url, getData));
