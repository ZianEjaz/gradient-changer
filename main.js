var inp1=document.getElementById("inp1");
var inp2=document.getElementById("inp2");
var outTxt=document.getElementById("css");
var gradiient=document.getElementById("gradient");
function setGradient(){
	gradiient.style.background = "linear-gradient(to right, " + inp1.value +", " +inp2.value;
}
outTxt.textContent = gradiient.style.background;
inp1.addEventListener("input", setGradient);
inp2.addEventListener("input", setGradient);
