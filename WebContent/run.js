var div;

function run() {
	var body = document.getElementById("body");
	
	div = document.createElement("div");
	
	div.className = "blue box";
	
	div.style.width = "500px";
	div.style.height = "200px";
	div.style.top = "100px";
	div.style.left = "100px";
	body.appendChild(div);
	
	setTimeout("doStuff()", 100);
}

function doStuff() {
	div.style.cssText = div.style.cssText + ";-webkit-transform: rotateY(360deg)";
}
