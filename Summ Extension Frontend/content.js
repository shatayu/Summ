var overlay = document.createElement('div');
overlay.style.width = '40%';
overlay.style.height = '312px';
overlay.style.position = 'fixed';
overlay.style.backgroundColor = "transparent";
overlay.style.right = '0';
overlay.style.bottom = '0';
overlay.style.opacity = '.8';
document.body.appendChild(overlay);


var table = document.createElement('table');
table.style.width = '40%';
table.style.height = '40%';
table.style.position = 'fixed';
table.style.backgroundColor = "yellow"
table.style.right = '0';
table.style.bottom = '0';
document.body.appendChild(table);


//Card 1
var card1 = document.createElement('table');
card1.style.width = '100px';
card1.style.height = '100px';
card1.style.position = 'fixed';
card1.style.backgroundColor = "white"
card1.style.right = '20px';
card1.style.bottom = '2%';
document.body.appendChild(card1);


//Card 2
var card2 = document.createElement('table');
card2.style.width = '100px';
card2.style.height = '100px';
card2.style.position = 'fixed';
card2.style.backgroundColor = "white"
card2.style.right = '150px';
card2.style.bottom = '2%';
document.body.appendChild(card2);


//Card 3
var card3 = document.createElement('table');
card3.style.width = '100px';
card3.style.height = '100px';
card3.style.position = 'fixed';
card3.style.backgroundColor = "white"
card3.style.right = '350px';
card3.style.bottom = '2%';
document.body.appendChild(card3);


 var html = "<table><tr><td>123</td><td>456</td></tr></table>";
    document.getElementById("table").innerHTML = html;

    document.getElementById("table").innerHTML = html;








    document.getElementById("record").click(function(){
    	state = true;
    	console.log("true");
    });
    document.getElementById("stop").click(function(){
    	state = false;
    	console.log("false");
    })
 
 var state = false
 var link = window.location.href ;
 
 while(state){
 link.onchange = function(){
 	
 var URL_Concept = "localhost:8080/api/summary/" + link ;
   $.ajax({
           type: 'GET',
           url: URL_Concept,
           dataType: 'json',
           success: processJSON,
           error: function(e)
           {
               console.log(e + "sdfsdf")
           }    
 }
 };
 }
 
 function processJSON(Json){
 
 	var Sentences = JSON.parse(Json);
 	var Links = Sentences.links;
 	document.getElementById("table").innerHTML = Links[0].name + " " + Links[0].url + " " + Links[0].displayUrl + " " + Links[0].description;
 
 	var summary = Sentences.sentences.split("[BREAK]");
 	var title = Sentences.title;
 
 } 