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