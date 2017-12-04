//get element by Class then change color based on selection
//display no text when selected, only the color
//play button will search for class then assign a sound 3-5 sec?

//functions to be loaded on start up
  var colorBox = document.getElementsByClassName('colorBox')

window.onload = function (){

  for (var i = 0; i < colorBox.length; i ++){
    colorBox[i].addEventListener('click', click)

    /*document.getElementById("box1").addEventListener('click', click)
    document.getElementById("box2").addEventListener('click', click)
    document.getElementById("box3").addEventListener('click', click)*/

  }
  document.getElementById("play").addEventListener('click', playMe)
}


    clicks = {};


//count the number of clicks and play desired sound
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
//returns back to starting point after running through all colors
      else if (clicks[id] === 6){
          clicks[id] = -1
          e.target.classList.toggle('purple')
          dance()
        }

  clicks[id]++;
  //e.target.textContent = clicks[id]

  //console.log(clicks[id])
}

function playMe(){

//makes the character dance every 1/4 second for 4.5 seconds
for (var i=0; i<24000; i+=250){
  setTimeout(dance, i)
  }

getSound()
}


let j = 0;
function getSound(){
  setTimeout (playSound, 2950)
}

function playSound() {
  j++

  let blueSound = document.getElementsByTagName('audio')[0]
  let greenSound = document.getElementsByTagName('audio')[1]
  let greySound = document.getElementsByTagName('audio')[2]
  let purpleSound = document.getElementsByTagName('audio')[3]
  let redSound = document.getElementsByTagName('audio')[4]
  let yellowSound = document.getElementsByTagName('audio')[5]
  let id = 'box' + j

  if(document.getElementById(id).classList.contains('grey')){
    greySound.play()
    if (j < 6){
      getSound()
    }
  }
  else if (document.getElementById(id).classList.contains('blue')){
    blueSound.play()
    if (j < 6){
      getSound()
    }
  }
  else if (document.getElementById(id).classList.contains('green')){
      greenSound.play()
      if (j < 6){
        getSound()
      }
  }
  else if (document.getElementById(id).classList.contains('purple')){
   purpleSound.play()
    if (j < 6){
      getSound()
    }
  }
    else if (document.getElementById(id).classList.contains('yellow')){
      yellowSound.play()
      if (j < 6){
        getSound()
      }
    }
    else if (document.getElementById(id).classList.contains('red')){
        redSound.play()
        if (j < 6){
          getSound()
        }
      } else {
    if (j < 6){
      getSound()
    }
  }
}




function dance(e){
  let invis = document.getElementById('invis')
  let show = document.getElementById('show')
  invis.classList.toggle('invis')
  show.classList.toggle('invis')
}
