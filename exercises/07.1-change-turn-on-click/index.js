var currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

window.turnChanger = function turnChanger() {
	if (currentUser == "Mario") {
		currentUser = "Juan";
	} else if (currentUser == "Juan") {
		currentUser = "Josh";
	} else {
		currentUser = "Mario";
	}

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}


 

/* Solution according to (who knows):

var currentUserIndex = 0;
var players = ["Mario", "Juan", "Josh"];
currentUser = players[currentUserIndex];

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

window.turnChanger = function turnChanger() {
	currentUserIndex = (++currentUserIndex) % players.length;
	currentUser = players[currentUserIndex];

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
} */
