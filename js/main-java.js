//get element by Class then change color based on selection
//display no text when selected, only the color
//play button will search for class then assign a sound 3-5 sec?

//functions to be loaded on start up
window.onload = function(){
var colorBox = document.getElementsByClassName('colorBox')

for (var i = 0; i < colorBox.length; i++) {
  colorBox[i].addEventListener('click', makeBlue)
}

function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}
}
/*window.onload = function (){
  var colorBox = document.getElementsByClassName('colorBox')
  for (var i = 0; i < colorBox.length; i ++){
    colorBox[i].addEventListener('click', chooseColor(evt))
  }



}
let evt = "x"
function chooseColor(evt){

    evt.target.style.backgroundColor = 'red'

}
//drop down of colors to select


/*function chooseColor(evt){
evt.target.classList.toggle('blue')


  /*let chosenColor = document.getElementsByClassName("colorBox")
  for (i = 0; i < chosenColor.length; i++){
    if (chosenColor[i] == "white")
    return "yes"
  }
  console.log(chosenColor)*/

//}
