var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}
function clickHandler(){
//   outputdiv.innerText = "translated" + txtInput.value;
var inputText = txtInput.value;

fetch(getTranslationURL(inputText))
.then(response =>response.json())
.then(json =>{
    var translatedText = json.contents.translated;
    outputdiv.innerText = translatedText;})
    
};


btnTranslate.addEventListener("click" , clickHandler)
    