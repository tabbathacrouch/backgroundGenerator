var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function randomGenerator(){
    var randomColor1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    var randomColor2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
    css.textContent = body.style.background + ";";
    document.getElementById("color1").setAttribute('value', randomColor1);
    document.getElementById("color2").setAttribute('value', randomColor2);
}

button.addEventListener("click", randomGenerator);

// code to generate random Hex colors was found on stack overflow
// https://stackoverflow.com/questions/5092808/how-do-i-randomly-generate-html-hex-color-codes-using-javascript