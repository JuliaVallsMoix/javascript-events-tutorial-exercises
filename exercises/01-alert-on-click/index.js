window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};

document.querySelector('#button2').addEventListener('click', () => {
	alert("My second function!")
});

// no entenc què és el 'click' de dins el parentesis ni perquè funciona si no hi ha cap onclick, ni està dins de la funció anterior que és on hi ha el onclick (al html), ni tampoc posem enlloc la funció 'myClickFunction', que és on hi ha la propietat de onclick
