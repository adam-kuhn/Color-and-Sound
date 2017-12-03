//get element by Class then change color based on selection
//display no text when selected, only the color
//play button will search for class then assign a sound 3-5 sec?

//functions to be loaded on start up

window.onload = function (){
  var colorBox = document.getElementsByClassName('colorBox')
  for (var i = 0; i < colorBox.length; i ++){
    colorBox[i].addEventListener('click', click)

    /*document.getElementById("box1").addEventListener('click', click)
    document.getElementById("box2").addEventListener('click', click)
    document.getElementById("box3").addEventListener('click', click)*/

  }
}

/*  var colorBox = document.getElementsByClassName('colorBox')
  for (var i = 0; i < colorBox.length; i ++){

    colorBox[i].addEventListener('click', makeGreen)

  }
  var colorBox = document.getElementsByClassName('colorBox')
  for (var i = 0; i < colorBox.length; i ++){

    colorBox[i].addEventListener('click', makeYellow)
  } */

/*var box1 = document.getElementById("box1"),
    box2 = document.getElementById("box2"),
    box3 = document.getElementById("box3"),*/
    clicks = {};

function click(e) {
  var id = e.target.id;
  if (!clicks[id]){
    clicks[id] = 0;
  }


  if (clicks[id] === 0){
    e.target.classList.toggle('grey')

  } else if (clicks[id] === 1){
    e.target.classList.toggle('grey')
    e.target.classList.toggle('blue')

  } else if (clicks[id] === 2){
    e.target.classList.toggle('blue')
    e.target.classList.toggle('green')

  } else if (clicks[id] === 3){
    e.target.classList.toggle('green')
    e.target.classList.toggle('yellow')

  }  else if (clicks[id] === 4){
      e.target.classList.toggle('yellow')
      e.target.classList.toggle('red')
    }
    else if (clicks[id] === 5){
        e.target.classList.toggle('red')
        e.target.classList.toggle('purple')            
      }

      else if (clicks[id] === 6){
          clicks[id] = -1
          e.target.classList.toggle('purple')
        }

  clicks[id]++;
  //e.target.textContent = clicks[id]

  console.log(clicks[id])
}







/*  let clicks = 0;
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

function changeColor2(evt){
  //let clicks = 0;
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
