$( document ).ready(function() {
    var URL_Sentiment = "https://damp-savannah-22073.herokuapp.com/api/summary/https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTurtle"
  

  $.ajax({
          type: 'GET',
          url: URL_Sentiment,
          dataType: 'json',
          success: processJSON,
          error: function(e)
          {
              console.log(e + "sdfsdf")
          }    
      });
         var URL_Sentiment2 = "https://damp-savannah-22073.herokuapp.com/api/summary/https%3A%2F%2Fwww.livescience.com%2F52361-turtle-facts.html"
  

  $.ajax({
          type: 'GET',
          url: URL_Sentiment2,
          dataType: 'json',
          success: processJSON2,
          error: function(e)
          {
              console.log(e + "sdfsdf")
          }    
      });
         var URL_Sentiment3 = "https://damp-savannah-22073.herokuapp.com/api/summary/https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTortoise"
  

  $.ajax({
          type: 'GET',
          url: URL_Sentiment3,
          dataType: 'json',
          success: processJSON3,
          error: function(e)
          {
              console.log(e + "sdfsdf")
          }    
      });
});

  
  function processJSON(Json){
  var Sentences = Json;
    console.log(Json);
    console.log("working");
    var num = 1;
  	//var Sentences = JSON.parse(Json);
  	var Links = Sentences.links;
  	//console.log(Links[0].name + " " + Links[0].url + " " + Links[0].displayUrl + " " + Links[0].description);
  
  	var summary = Sentences.sentences.split("[BREAK]");
  	var title = Sentences.name;

    // document.cookies = "name=[" + title + "]" + summary + "[" ;
    // console.log(getCookie(title));
    
    document.getElementById("sum" + num).innerHTML = summary;
    document.getElementById("title" + num).innerHTML = title;

  


    // for(i = 0; i< Links.length; i++){
    //   var link = document.createElement("p");
    //   var href = document.createElement("a");
    //   var description = document.createElement("p");
    //   var extra = document.createElement("h4");

    //   var linkText = document.createTextNode(Links[i].displayUrl);
    //   var descriptionText = document.createTextNode(Links[i].description);
    //   var extraText = document.createTextNode(Links[i].name);

    //   link.appendChild(linkText);
    //   href.href = Links[i].url
    //   href.appendChild(link);
    //   description.appendChild(descriptionText);
    //   extra.appendChild(extraText);

    //   var div = document.createElement("div");
    //   div.appendChild(href);
    //   div.appendChild(description);
    //   div.appendChild(extraText);

    //   var test = document.getElementById("Links" + num);
    //   test.appendChild(div);

    // }
    if(num == 3){
        num = 1
      }else{
        num++;
      }
  }

  function processJSON2(Json){
  var Sentences = Json;
    console.log(Json);
    console.log("working");
    var num = 2;
  	//var Sentences = JSON.parse(Json);
  	var Links = Sentences.links;
  	//console.log(Links[0].name + " " + Links[0].url + " " + Links[0].displayUrl + " " + Links[0].description);
  
  	var summary = Sentences.sentences.split("[BREAK]");
  	var title = Sentences.name;

    // document.cookies = "name=[" + title + "]" + summary + "[" ;
    // console.log(getCookie(title));
    
    document.getElementById("sum" + num).innerHTML = summary;
    document.getElementById("title" + num).innerHTML = title;

  


    // for(i = 0; i< Links.length; i++){
    //   var link = document.createElement("p");
    //   var href = document.createElement("a");
    //   var description = document.createElement("p");
    //   var extra = document.createElement("h4");

    //   var linkText = document.createTextNode(Links[i].displayUrl);
    //   var descriptionText = document.createTextNode(Links[i].description);
    //   var extraText = document.createTextNode(Links[i].name);

    //   link.appendChild(linkText);
    //   href.href = Links[i].url
    //   href.appendChild(link);
    //   description.appendChild(descriptionText);
    //   extra.appendChild(extraText);

    //   var div = document.createElement("div");
    //   div.appendChild(href);
    //   div.appendChild(description);
    //   div.appendChild(extraText);

    //   var test = document.getElementById("Links" + num);
    //   test.appendChild(div);

    // }
    if(num == 3){
        num = 1
      }else{
        num++;
      }
  }

  function processJSON3(Json){
  var Sentences = Json;
    console.log(Json);
    console.log("working");
    var num = 3;
  	//var Sentences = JSON.parse(Json);
  	var Links = Sentences.links;
  	//console.log(Links[0].name + " " + Links[0].url + " " + Links[0].displayUrl + " " + Links[0].description);
  
  	var summary = Sentences.sentences.split("[BREAK]");
  	var title = Sentences.name;

    // document.cookies = "name=[" + title + "]" + summary + "[" ;
    // console.log(getCookie(title));
    
    document.getElementById("sum" + num).innerHTML = summary;
    document.getElementById("title" + num).innerHTML = title;

  


    // for(i = 0; i< Links.length; i++){
    //   var link = document.createElement("p");
    //   var href = document.createElement("a");
    //   var description = document.createElement("p");
    //   var extra = document.createElement("h4");

    //   var linkText = document.createTextNode(Links[i].displayUrl);
    //   var descriptionText = document.createTextNode(Links[i].description);
    //   var extraText = document.createTextNode(Links[i].name);

    //   link.appendChild(linkText);
    //   href.href = Links[i].url
    //   href.appendChild(link);
    //   description.appendChild(descriptionText);
    //   extra.appendChild(extraText);

    //   var div = document.createElement("div");
    //   div.appendChild(href);
    //   div.appendChild(description);
    //   div.appendChild(extraText);

    //   var test = document.getElementById("Links" + num);
    //   test.appendChild(div);

    // }
    if(num == 3){
        num = 1
      }else{
        num++;
      }
  }