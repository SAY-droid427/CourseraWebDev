//Checking whether the buttons are working
var BOOT=document.querySelector("#butt");
BOOT.addEventListener("click",toClick);
function toClick(e){
    e.preventDefault();
    console.log("Clicked");
}
