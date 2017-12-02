//get element by Class then change color based on selection
//display no text when selected, only the color
//play button will search for class then assign a sound 3-5 sec?

//functions to be loaded on start up

window.onload = function (){
  var colorBox = document.getElementsByClassName('colorBox')
  for (var i = 0; i < colorBox.length; i ++){
    colorBox[i].addEventListener('click', clickCount)

  }

/*  var colorBox = document.getElementsByClassName('colorBox')
  for (var i = 0; i < colorBox.length; i ++){

    colorBox[i].addEventListener('click', makeGreen)

  }
  var colorBox = document.getElementsByClassName('colorBox')
  for (var i = 0; i < colorBox.length; i ++){

    colorBox[i].addEventListener('click', makeYellow)
  } */


}
var clicks = 0;
function clickCount() {
  clicks += 1
  console.log(clicks)
  if (clicks === 11){
    clicks = 0
  }
}
/*function clickCount(evt){
  var counter = evt.currentTarget;
  counter.clicks = (counter.clicks || 0) + 1;
  if (counter.clicks >= 11){
    clickCount()
    return console.log('yes')
  }
  console.log(evt.clicks)
}*/

//    evt.target.classList.toggle('blue')
//}

/*function makeGreen(evt){

    evt.target.classList.toggle('green')
}

function makeYellow(evt){

    evt.target.classList.toggle('yellow')
}*/
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
