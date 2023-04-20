window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		alert(event.target.id)

	});
};

/* No seria eventInformation.target? No entenc perquè ho agafa igualment. I com pot ser que només posant .id ja agafi els ids de tot el codi html? */