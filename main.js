document.getElementById("bulb-switch").style. backgroundColor = "white"; 
function myFunctions(){
document.getElementById("img1").src = "img2.png"; 
document.getElementById("img2").src = "img2.png"; 
document.getElementById("img3").src = "img2.png";
document.getElementById("background").style.backgroundColor = "black";

document.getElementById("img1").style.visibility = "visible"; 
document.getElementById("img2").style.visibility = "visible"; 
document.getElementById("img3").style.visibility = "visible";

document.getElementById("img1").style.transition = "0.9s"; 
document.getElementById("img2").style.transition = "0.9s"; 
document.getElementById("img3").style.transition = "0.9s";

document.getElementById("demo").innerHTML = "BULB OFF";
document.getElementById("demo").style.color = "#fff";


} 

 function myFunction(){
document.getElementById("img1").src = "img1.png"; 
document.getElementById("img2").src = "img1.png"; 
document.getElementById("img3").src = "img1.png";

document.getElementById("background").style.backgroundColor = "#fff";
document.getElementById("img1").style.visibility = "visible"; 
document.getElementById("img2").style.visibility = "visible"; 

document.getElementById("img3").style.visibility = "visible";
document.getElementById("img1").style.transition = "0.9s"; 
document.getElementById("img2").style.transition = "0.9s"; 
document.getElementById("img3").style.transition = "0.9s";

document.getElementById("demo").innerHTML = "BULB ON";
document.getElementById("demo").style.color = "black";
} 