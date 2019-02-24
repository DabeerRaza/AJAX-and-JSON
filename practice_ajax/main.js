// test = () => {
// 	var xmlhttp;

// 	if (window.XMLHttpRequest) {
// 		xmlhttp = new XMLHttpRequest();
// 	}else{
// 		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
// 	}

// 	xmlhttp.onreadystatechange = () => {
// 		if (xmlhttp.readyState==4) {
// 			document.getElementById('target').innerHTML = xmlhttp.responseText;
// 		}
// 	}
// 	xmlhttp.open("GET", "https://github.com/git/git/blob/master/Documentation/git.txt", true);
// 	xmlhttp.send();
// }
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("target").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "testing.txt", true);
  xhttp.send();
}