var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function constructurl(text){
    return "https://api.funtranslations.com/translate/minion.json"+"?"+"text=" + text;
}

function dofetch(text){
    console.log(constructurl(text))
    fetch(constructurl(text))
    .then(response => response.json())
    .then(json => outputDiv.innerText = json.contents.translated )
}
function clickEventHandler(){
    dofetch(txtInput.value);
   
}
btnTranslate.addEventListener("click",clickEventHandler);



