// let playerOneAttack = Math.floor(Math.random() * Person.maxDamage);

// /*------------------------------------*/

// Creating an Array for the various character images
const warriorArray = [
  "images/samurai.png",
  "images/troll.png",
  "images/elf.png",
  "images/ghoul.png"
];

const warriorArrayV2 = [
  {
    img: 'images/samurai.png',
    name: 'Hideyoshi',
    race: 'human',
    weapon: 'katana',
    currentHealth: 100,
    maxHealth: 100,
    maxDamage: 20,
    maxHealing: 30
  }
]
var warriorClan = warriorArray.length;

let nextWarrior = document.getElementById("next-one");
let previousWarrior = document.getElementById("previous-one");
const p1avatar = document.getElementById("player-one-avatar");
const imagePlayerOne = document.getElementById("selection-player-one");

const createWarrior = document.createElement('IMG');
var lastWarrior = warriorArray[warriorClan-1];
let i = 0;

previousWarrior.addEventListener("click", function(){

  if (i === -1){
    i = 3;

  }
  createWarrior.setAttribute("src", warriorArray[i]);
  createWarrior.setAttribute("class", "warrior");
  createWarrior.setAttribute("height", "375");
  createWarrior.setAttribute("alt", "selected warrior");
  p1avatar.appendChild(createWarrior);

  i -= 1;

})

nextWarrior.addEventListener("click", function(){

  if (i === 4){
    i = 0;
  }
  createWarrior.setAttribute("src", warriorArray[i]);
  createWarrior.setAttribute("class", "warrior");
  createWarrior.setAttribute("height", "375");
  createWarrior.setAttribute("alt", "selected warrior");
  p1avatar.appendChild(createWarrior);

  i += 1;
})



// if (warriorArray.indexOf(lastWarrior) > -1) {
//   // return;
// }

// var header = document.getElementById("myDIV");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   if (current.length > 0) {
//     current[0].className = current[0].className.replace(" active", "");
//   }
//   this.className += " active";
//   });
// }





// let previousP1 = document.getElementById("previous-p1");
// let nextP1 = document.getElementById("next-p1");

// previousP1.addEventListener("click", function (){
//   console.log('prev')
// });

// nextP1.addEventListener("click", function (){
//   console.log('next')
// });
// console.log(warriorArray);

// let characterArray =
/* TIMER for BATTLE
 var timeleft = 120;
 var downloadTimer = setInterval(function(){
   document.getElementById("countdown").innerText = timeleft;
   timeleft -= 1;
   if(timeleft <= 0){
     clearInterval(downloadTimer);
     document.getElementById("countdown").innerText = "Time's up !"
    }
 }, 1000); */

var itemSelect = document.getElementById("selection-player-one-items");
var itemButton = itemSelect.getElementsByClassName("item-p1");
for (var k = 0; k < itemButton.length; k++) {
  itemButton[k].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}
