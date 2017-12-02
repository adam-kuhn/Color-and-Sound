//get element by Class then change color based on selection
//display no text when selected, only the color
//play button will search for class then assign a sound 3-5 sec?

//functions to be loaded on start up
window.onload = function (){

chooseColor()

}

//drop down of colors to select
function chooseColor(){
  let chosenColor = document.getElementsByClassName("color-box")
  for (i = 0; i < chosenColor.length; i++){
    if (chosenColor[i] == "white")
    return "yes"
  }
  console.log(chosenColor)

}
