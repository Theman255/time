function drDRCreateScriptTag(s, i, c) {
	var js = document.createElement("script");
	if(s)
		js.src = s;
	if(i)
		js.id = i;
	if(c)
		js.class = c;
	document.body.appendChild(js);
}

var h;
if(location.protocol == 'index22.html')
	h = "index22.html";
else
	h = "index22.html";


