//Creating the new component li
var items=document.getElementById("card");

//Checking whether the buttons are working
var BOOT=document.querySelector("#butt");
BOOT.addEventListener("click",toClick);
function toClick(e){
    e.preventDefault();
    console.log("Clicked");
    console.log(e.target.value);
    var newItem=document.createElement("li");
    newItem.className="list-group-item";
    var tex=document.getElementById("control").value;
    var newContent=document.createTextNode(tex);
    newItem.appendChild(newContent); 
    items.appendChild(newItem);
    

    
}
