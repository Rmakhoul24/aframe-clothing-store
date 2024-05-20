let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let text1 = document.querySelector("#but1");
let text2 = document.querySelector("#but2");
let t1 = document.querySelector("#tooltip1");
let t2 = document.querySelector("#tooltip2");
let click = true;
let activeSlide = 1;
let currentSlide, nextSlide, prevSlide;
let currentText, nextText, prevText;

//main event listener's
next.addEventListener("click", () => {
	if (click) {
		moveForward();
	}
});

prev.addEventListener("click", () => {
	if (click) {
		moveBackward();
	}
});

// for cursor interaction with buttons
next.addEventListener("mouseenter", () => {
	next.setAttribute("color", "#fff");
	text1.setAttribute("color", "#000");

	//for displaying the tootip
	t1.setAttribute("scale", "1 1 1");
});

next.addEventListener("mouseleave", () => {
	next.setAttribute("color", "#000");
	text1.setAttribute("color", "#fff");

	//for hiding the tootip
	t1.setAttribute("scale", "0 0 0");
});

prev.addEventListener("mouseenter", () => {
	prev.setAttribute("color", "#fff");
	text2.setAttribute("color", "#000");

	//for displaying the tootip
	t2.setAttribute("scale", "1 1 1");
});

prev.addEventListener("mouseleave", () => {
	prev.setAttribute("color", "#000");
	text2.setAttribute("color", "#fff");

	//for hiding the tootip
	t2.setAttribute("scale", "0 0 0");
});

function moveForward() {
	click = false;

	if (activeSlide == 3) {
		currentSlide = document.querySelector("#image" + activeSlide);
		currentText = document.querySelector("#text" + activeSlide);
		nextSlide = document.querySelector("#image" + 1);
		nextText = document.querySelector("#text" + 1);
		activeSlide = 1;
	} else {
		currentSlide = document.querySelector("#image" + activeSlide);
		currentText = document.querySelector("#text" + activeSlide);
		activeSlide++;
		nextSlide = document.querySelector("#image" + activeSlide);
		nextText = document.querySelector("#text" + activeSlide);
	}
	nextSlide.setAttribute("theta-start", 0);
	currentSlide.emit("move-back");
	currentSlide.emit("move-back-theta");
	nextSlide.emit("move-forward");
	currentText.emit("hide");
	nextText.emit("show");
	setTimeout(() => {
		click = true;
	}, 1000);
}

function moveBackward() {
	click = false;

	if (activeSlide == 1) {
		currentSlide = document.querySelector("#image" + activeSlide);
		currentText = document.querySelector("#text" + activeSlide);
		prevSlide = document.querySelector("#image" + 3);
		prevText = document.querySelector("#text" + 3);
		activeSlide = 3;
	} else {
		currentSlide = document.querySelector("#image" + activeSlide);
		currentText = document.querySelector("#text" + activeSlide);
		activeSlide--;
		prevSlide = document.querySelector("#image" + activeSlide);
		prevText = document.querySelector("#text" + activeSlide);
	}

	currentSlide.emit("move-back");
	prevSlide.emit("move-forward");
	prevSlide.emit("move-forward-theta");
	currentText.emit("hide");
	prevText.emit("show");
	setTimeout(() => {
		click = true;
	}, 1000);
}
