//schimbare culoare fundal prin selectia utilizatorului
var myParent = document.getElementById('backgroundSelector');
var array = ["white", "pink","red","blue","green"];

//Create and append select list
var selectList = document.createElement("select");
selectList.id = "bkgcolor";

myParent.appendChild(selectList);



//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
}

document.getElementById('bkgcolor').onchange = (event) => {
    // console.log('here')
    changeBody(event.target.value);
};

function changeBody(color) {
  document.body.style.backgroundColor = color;
}

//creaza elem audio la incarcarea paginii
function createAudio() {
  var x = document.createElement("AUDIO");
    x.setAttribute("src","muzica.mp3");
    x.setAttribute("controls", "controls");
    document.body.appendChild(x);
}
window.addEventListener("load",createAudio());