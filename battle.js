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
    maxHealing: 30,
    maxDeflect: 22
  },
  {
    img: 'images/troll.png',
    name: 'Zulabar',
    race: 'troll',
    weapon: 'Menhir',
    currentHealth: 150,
    maxHealth: 150,
    maxDamage: 30,
    maxHealing: 15,
    maxDeflect: 10
  },
  {
    img: 'images/elf.png',
    name: 'Ferndihl',
    race: 'Elf',
    weapon: 'Longbow',
    currentHealth: 150,
    maxHealth: 100,
    maxDamage: 15,
    maxHealing: 20,
    maxDeflect: 35
  },
  {
    img: 'images/ghoul.png',
    name: 'Boris',
    race: 'Undead',
    weapon: 'Necromance',
    currentHealth: 120,
    maxHealth: 120,
    maxDamage: 15,
    maxHealing: 40,
    maxDeflect: 15
  }
]

let nextWarrior = document.getElementById("next-one");
let previousWarrior = document.getElementById("previous-one");
const p1avatar = document.getElementById("player-one-avatar");
const imagePlayerOne = document.getElementById("selection-player-one");
var warriorClan = warriorArray.length;

const createWarrior = document.createElement('IMG');
var lastWarrior = warriorArray[warriorClan-1];

let i = 0;
 
previousWarrior.addEventListener("click", function(){
  
  if (i === -1){
    i = 3; 
    
  }
  createWarrior.setAttribute("src", warriorArray[i]);
  createWarrior.setAttribute("class", "warrior");
  createWarrior.setAttribute("height", "475");
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
  createWarrior.setAttribute("height", "475");
  createWarrior.setAttribute("alt", "selected warrior");
  p1avatar.appendChild(createWarrior);

  i += 1;
})


warriorArrayV2.forEach(function (item, index, warriorArrayV2) {
  console.log(item, index);
});

//   boldStuffs[i].innerHTML = fruit.name + '<img src="'+fruit.image+'">';

// ACTIVE/INACTIVE state for Items
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

//  Log information about the Warrior 
 function LogWarrior() {
  console.log("Name: " + warrior_name
  + "\n" + "ID: " + warrior_
  + "\n" + "Moves:", warrior_moves
  , "\n" + "Abilities:", warrior_abilities
  , "\n" + "Image URL: " + warrior_image
  + "\n" + "Weight: " + warrior_weight);
}