window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here

	/* In the solution there is no code here, I have added the following one but it doesn't react to it. */

	/* document.body.onload = (myLoadFunction) */
};

//the listener function here

document.querySelector('#theGreen').addEventListener('click', () => {
	alert('woohoo!')
} );

/* Here I don't understand neither what does it do "click". */
