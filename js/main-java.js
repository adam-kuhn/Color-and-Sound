//get element by Class then change color based on selection
//display no text when selected, only the color
//play button will search for class then assign a sound 3-5 sec?

//functions to be loaded on start up

window.onload = function (){
  var colorBox = document.getElementsByClassName('colorBox')
  for (var i = 0; i < colorBox.length; i ++){
    colorBox[i].addEventListener('click', changeColor)

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




let clicks = 0;

function changeColor(evt){
  clicks += 1

  switch(clicks) {
    case 1:
    evt.target.classList.toggle('white');
    break;

    case 2:
    evt.target.classList.toggle('white');
    evt.target.classList.toggle('blue');
    break;

    case 3:
    evt.target.classList.toggle('blue');
    evt.target.classList.toggle('green');
    break;

    case 4:
    evt.target.classList.toggle('green');
    evt.target.classList.toggle('yellow');
    break;

    case 5:
    clicks = 0;
    evt.target.classList.toggle('yellow')



  }
  console.log(clicks)
}
/* using if then
  if (clicks === 5){
  clicks = 0
  evt.target.classList.toggle('yellow')
  }
  if (clicks === 1){
    //evt.target.classList.toggle('yellow')
    evt.target.classList.toggle('white')
  } else if (clicks === 2){
    evt.target.classList.toggle('white')
    evt.target.classList.toggle('blue')
  } else if (clicks === 3){
    evt.target.classList.toggle('blue')
    evt.target.classList.toggle('green')
  } else if (clicks === 4){
    evt.target.classList.toggle('green')
    evt.target.classList.toggle('yellow')
  }
} /*

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
