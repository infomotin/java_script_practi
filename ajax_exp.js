function getXMLHttp() {
  var xmlhttp;
  try {
    xmlhttp = new XMLHttpRequest();
  } catch (e) {
    // alert("Your browser does not support AJAX!");
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        alert("Your browser does not support AJAX!");
        return false;
      }
    }
  }
  return xmlhttp;
}



function AjaxRequest() {
  var xmlHttp = getXMLHttp();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4) {
      HandleResponse(xmlHttp.responseText);
    }
  };
  xmlHttp.open("GET", "myfirstprogram.php", true);
  // replace name with any PHP program
  xmlHttp.send(null);
}
function HandleResponse(response) {
  document.getElementById("AjaxResponse").innerHTML = response;
}