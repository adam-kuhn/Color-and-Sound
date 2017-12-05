
var colorBox = document.getElementsByClassName('colorBox')

window.onload = function (){
  //add event listeners
  for (var i = 0; i < colorBox.length; i ++){
    colorBox[i].addEventListener('click', click)
  }
  document.getElementById("play").addEventListener('click', playMe)
}

//count the number of clicks and play desired sound, when selected

clicks = {};
function click(e) {
  //gets audio file from HTML
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
//colors toggle on and off in order as the button is clicked
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
}
//when play button is clicked
function playMe(){

//makes the character dance every 1/4 second for 24 seconds
for (var i=0; i<24000; i+=250){
  setTimeout(dance, i) //timeout used to delay the switch of the image
  }
getSound()
}



function getSound(){
  setTimeout (playSound, 2950) //allows for sounds to not overlap and play after one another

}
//have to make a psuedo loop because setTimout() does not block functionalitly, only delays the current thread. i.e. doesn't work in a for loop
let j = 0;
function playSound() {

j++
console.log(j)
  let blueSound = document.getElementsByTagName('audio')[0]
  let greenSound = document.getElementsByTagName('audio')[1]
  let greySound = document.getElementsByTagName('audio')[2]
  let purpleSound = document.getElementsByTagName('audio')[3]
  let redSound = document.getElementsByTagName('audio')[4]
  let yellowSound = document.getElementsByTagName('audio')[5]
  //this will allow us to determin the element ID (which box has what color)
  let id = 'box' + j

  if (j >= 7){
   j=0
   getSound()
 }
//play desired sounds for the color in each box
else if(document.getElementById(id).classList.contains('grey')){
    greySound.play()

    //switch which glow is showing
    document.getElementById(id).classList.toggle('glow1')
    document.getElementById(id).classList.toggle('glow2') //
    if (j < 6){
      getSound()
    }
  }
  else if (document.getElementById(id).classList.contains('blue')){
    blueSound.play()
    //switch which glow is showing
    document.getElementById(id).classList.toggle('glow1')
    document.getElementById(id).classList.toggle('glow2')
    if (j < 6){
      getSound()
    }
  }
  else if (document.getElementById(id).classList.contains('green')){
      greenSound.play()
      //switch which glow is showing
      document.getElementById(id).classList.toggle('glow1')
      document.getElementById(id).classList.toggle('glow2')
      if (j < 6){
        getSound()
      }
  }
  else if (document.getElementById(id).classList.contains('purple')){
   purpleSound.play()
   //switch which glow is showing
   document.getElementById(id).classList.toggle('glow1')
   document.getElementById(id).classList.toggle('glow2')
    if (j < 6){
      getSound()
    }
  }
    else if (document.getElementById(id).classList.contains('yellow')){
      yellowSound.play()
      //switch which glow is showing
      document.getElementById(id).classList.toggle('glow1')
      document.getElementById(id).classList.toggle('glow2')
      if (j < 6){
        getSound()
      }
    }
    else if (document.getElementById(id).classList.contains('red')){
        redSound.play()
        //switch which glow is showing
        document.getElementById(id).classList.toggle('glow1')
        document.getElementById(id).classList.toggle('glow2')
        if (j < 6){
          getSound()
        }
      } else if (j < 6){
        //switch which glow is showing
      document.getElementById(id).classList.toggle('glow1')
      document.getElementById(id).classList.toggle('glow2')
      getSound()
    }

}


//make the image dance
function dance(e){
  let invis = document.getElementById('invis')
  let show = document.getElementById('show')
  invis.classList.toggle('invis')
  show.classList.toggle('invis')
}
