
/*
var notes  = json.parse(//capi call)

for (var i = 0; i(notes.length; i++) {
	//process notes[i].title
	//process notes[i].url
	//process notes[i].iteration

for var j = 0; j < summary.length; i++{
	//process notes[i].summary[i]
}
}
*/
var id = 'demo';

for (var i = 0; i < notes.length; i++) {
	document.getElementById("demo").innerHTML = notes;
	var summary = notes[i].summary.split("[BREAK"])
	for (var j = 0; j < summary.length; j++) {summary[j[]]}
}

