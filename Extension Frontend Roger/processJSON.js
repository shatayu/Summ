
  
   
//    var state = false;
  

//   $(document).ready(function () {
//   //your code here

// // if ("onhashchange" in window) {
// //     alert("The browser supports the hashchange event!");
// // }
// 	$( "#record" ).click(function(){
//      	state = true;
//      	console.log(state);
     	
//      });

// $( "#stop" ).click(function(){
//      	state = false;
//      	console.log(state);
     	
     	
//      });
// jQuery(function($) {
//       if (window.console && console.log) {
//         $(window).hashchange(function(e, data) {
//           console.log("before change:", data.before);
//           console.log("after change (current value):", data.after);
//         });
//       }
//     });
  	
// });
//   var link = document.URL;
//   	console.log(link);
     
//   	while(state){

//   	link = document.URL;
//   	chrome.cookies.set(link);
 $(document).ready(function () {
  //window.setTimeout(main,10000);
  main();
 });

	function main(){
  // 	var URL_Concept = "http://localhost:8080/api/summary/https%3A%2F%2Farstechnica.com%2Fscience%2F2017%2F07%2Fa-brief-history-of-quantum-alternatives%2F" ;
  //   $.ajax({
  //           type: 'GET',
  //           url: URL_Concept,
  //           dataType: 'json',
  //           success: processJSON,
  //           error: function(e)
  //           {
  //               console.log(e + "sdfsdf")
  //           }    
  // });
 }





  
  function processJSON(Json){
  
    // var num = 1;
  	 var Sentences = JSON.parse(Json);
  	 var Links = Sentences.links;
  	 console.log(Links[0].name + " " + Links[0].url + " " + Links[0].displayUrl + " " + Links[0].description);
  
  	// var summary = Sentences.sentences.split("[BREAK]");
  	// var title = Sentences.title;
  
    // document.getElementById("sum" + num).innerHTML = summary;
    // document.getElementById("title" + num).innerHTML = title;
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

    //   var element = document.getElementById("Links" + num);
    //   element.appendChild(div);

    //   if(num == 3){
    //     num = 1
    //   }else{
    //     num++;
    //   }

    // }
  
  }

