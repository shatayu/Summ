var overlay = document.createElement('div');
overlay.style.width = '500px';
overlay.style.height = '200px';
overlay.style.position = 'fixed';
overlay.style.backgroundColor = "darkblue";
overlay.style.right = '0';
overlay.style.bottom = '0';
overlay.style.opacity = '.9';
document.body.appendChild(overlay);

var table = document.createElement('table');
overlay.style.width = '500px';
overlay.style.height = '200px';
overlay.style.position = 'fixed';
overlay.style.right = '0';
overlay.style.bottom = '0';
document.body.appendChild(table);

 var html = "<table><tr><td>123</td><td>456</td></tr></table>";
    document.getElementById("table").innerHTML = html;

var state = false
var link = window.location.href ;

while(state){
link.onchange = function(){
	
var URL_Concept = "hosturl/api/summary/" + link ;
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