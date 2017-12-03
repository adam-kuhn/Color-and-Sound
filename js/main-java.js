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
  document.getElementById("play").addEventListener('click', playMe)
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
  let blueSound = document.getElementsByTagName('audio')[0]
  let greenSound = document.getElementsByTagName('audio')[1]
  let greySound = document.getElementsByTagName('audio')[2]
  let purpleSound = document.getElementsByTagName('audio')[3]
  let redSound = document.getElementsByTagName('audio')[4]
  let yellowSound = document.getElementsByTagName('audio')[5]

  var id = e.target.id;
  if (!clicks[id]){
    clicks[id] = 0;
  }


  if (clicks[id] === 0){
    e.target.classList.toggle('grey')
    greySound.play()
    dance()

  } else if (clicks[id] === 1){
    e.target.classList.toggle('grey')
    e.target.classList.toggle('blue')
    blueSound.play()
    dance()

  } else if (clicks[id] === 2){
    e.target.classList.toggle('blue')
    e.target.classList.toggle('green')
    greenSound.play()
    dance()

  } else if (clicks[id] === 3){
    e.target.classList.toggle('green')
    e.target.classList.toggle('yellow')
    yellowSound.play()
    dance()

  }  else if (clicks[id] === 4){
      e.target.classList.toggle('yellow')
      e.target.classList.toggle('red')
      redSound.play()
      dance()
    }
    else if (clicks[id] === 5){
        e.target.classList.toggle('red')
        e.target.classList.toggle('purple')
        purpleSound.play()
        dance()
      }

      else if (clicks[id] === 6){
          clicks[id] = -1
          e.target.classList.toggle('purple')
          dance()
        }

  clicks[id]++;
  //e.target.textContent = clicks[id]

  console.log(clicks[id])
}

function playMe(){
  var blueSound = document.getElementsByTagName('audio')[0]
  var greenSound = document.getElementsByTagName('audio')[1]
  var greySound = document.getElementsByTagName('audio')[2]
  var purpleSound = document.getElementsByTagName('audio')[3]
  var redSound = document.getElementsByTagName('audio')[4]
  var yellowSound = document.getElementsByTagName('audio')[5]
let allSound = []

for (var i=0; i<3501; i+=250){
  setTimeout(danceMotion, i)
  function danceMotion(){
    dance()
  }
}



setTimeout(playBlue, 0)
function playBlue(){
  blueSound.play()
  dance()
}




//greenSound.play()
setTimeout(playGreen,1000)
function playGreen(){
  greenSound.play()
  dance()
}




//greySound.play()
setTimeout(playGrey, 2000)
function playGrey(){
  greySound.play()
  dance()
}




  }


//  mix.play()

  //blueSound.play()
//  greenSound.play()
//  greySound.play()
//  purpleSound.play()
//  redSound.play()
  //yellowSound.play()



function dance(e){
  let invis = document.getElementById('invis')
  let show = document.getElementById('show')
  invis.classList.toggle('invis')
  show.classList.toggle('invis')


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
