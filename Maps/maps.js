var x;
function GetVideo() {
  x = document.createElement("VIDEO");
  x.setAttribute("src","movie.mp4");
  x.setAttribute("width", "620");
  x.setAttribute("height", "440");
  x.setAttribute("controls", "controls");
  x.setAttribute("display","block");
  x.setAttribute("margin-left","auto");
  x.setAttribute("margin-right","auto");
  x.setAttribute("autoplay", "autoplay");
  document.getElementById("center").appendChild(x);
  var y = document.createElement("INPUT");
  y.setAttribute("type", "button");
  y.setAttribute("value", "Close");
  y.addEventListener("click",Close);
  document.getElementById("center").appendChild(y);
}

setTimeout(function(){ 
      window.addEventListener("load", GetVideo());
  },3000);

function Close(){
     var video = document.getElementById('center');
     video.remove();
}



