//selecting the elements that we needed
var button= document.getElementById("enter");
var input= document.getElementById("user input");
var ul= document.querySelector("ul");
var list= document.querySelectorAll("ul>li");

//bunch of function declaration

function inputLength(){
	return input.value.length;
}

function createListElement(){
	//Appending delete button to newly added li elements
	var deleteButton = document.createElement("button");
		deleteButton.setAttribute("class", "btn");
		deleteButton.appendChild(document.createTextNode("Delete"));


	var li= document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li).addEventListener("click", toggleList);
		input.value="";

	ul>li.appendChild(deleteButton).addEventListener("click", removeItem);
	
}

function addListAfterClick() {
	if(inputLength() >0)
		createListElement();
}

function addListAfterKeypress(event) {
	if(inputLength() >0 && event.keyCode===13)
		createListElement();
}




//here we are using those functions

button.addEventListener("click", addListAfterClick);
// list.addEventListener("click", doneStrike)
input.addEventListener("keypress", addListAfterKeypress);

//toggle list item on and off when clicked on 
var list=document.querySelectorAll("ul>li");
for (var i = 0; i < list.length; i++) {
	list[i].addEventListener("click",toggleList);
}
function toggleList(){
	this.classList.toggle("done");
}


//deleting function
function removeItem(){
	this.parentNode.remove();
}

//deleting the list item by clicking on the delete button next to it
var elements= document.getElementsByClassName("btn");
for(var i=0; i<elements.length;i++)
	elements[i].addEventListener("click", removeItem);

