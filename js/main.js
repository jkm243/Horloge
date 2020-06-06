var cadran = document.querySelector(".cadran");
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  cadran.innerHTML = t;
}
