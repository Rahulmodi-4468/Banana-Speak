var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function constructUrl(text){
    return "https://api.funtranslations.com/translate/minion.json"+"?"+"text=" + text;
}

/** For Fetch Url and Call API and Get Response**/
function doFetch(text){
    fetch(constructUrl(text))
    .then(response => response.json())
    .then(json => outputDiv.innerText = json.contents.translated )
}
/** Event Handler Function**/
function clickEventHandler(){
    doFetch(txtInput.value);
   
}

/** On Button click Call EventHander Function**/
btnTranslate.addEventListener("click",clickEventHandler);



