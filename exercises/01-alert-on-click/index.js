window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
	document.querySelector('#button2').myClickFunction.onclick.alert("Your second function!")
};

document.querySelector('#button2').addEventListener('click', myClickFunction)

