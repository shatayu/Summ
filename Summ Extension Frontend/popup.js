function click(e) {
7	  chrome.tabs.executeScript(null,
8	      {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
9	  window.close();
10	}
11	
12	document.addEventListener('DOMContentLoaded', function () {
13	  var divs = document.querySelectorAll('div');
14	  for (var i = 0; i < divs.length; i++) {
15	    divs[i].addEventListener('click', click);
16	  }
17	});