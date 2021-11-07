var btnTranslate =document.querySelector("#btn-translate");

var txtInput =document.querySelector("#txt-input");
console.log(txtInput)

btnTranslate.addEventListener("click", clickEventHandler) 

//this.style.border="10px solid red"
function clickEventHandler()
{
console.log("YOU CLICKED");
console.log(txtInput.value);
};
