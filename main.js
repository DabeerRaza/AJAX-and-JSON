var pageCounter = 1;
var animalInfo = document.querySelector('#animal-info');
var btn = document.querySelector('#btn');

btn.addEventListener("click", () =>{
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
	ourRequest.onload = () => {
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	};
	ourRequest.send();

	pageCounter++;

	if (pageCounter > 3){
		btn.classList.add("hide-me");\
	}
});

renderHTML = props => {
	var htmlString= "";

	for (i = 0; i < props.length; i++) {
		htmlString += "<p>" + props[i].name + " is a " + props[i].species + ".</p>";
	};

	animalInfo.insertAdjacentHTML('beforeend', htmlString);
}