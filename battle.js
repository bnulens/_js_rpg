// let playerOneAttack = Math.floor(Math.random() * Person.maxDamage);

// /*------------------------------------*/
// 
// CREATION PAGE SCRIPT
// 
// Creating an Array for the various character images
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
    maxDeflect: 25
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

// CREATE AVATAR
const createWarriorImage = document.createElement('IMG');
const warriorStats = document.createElement('div');
const nameHeader = document.createElement('h2');
let previousP1Warrior = document.getElementById("previous-one");
let nextP1Warrior = document.getElementById("next-one");
const p1avatar = document.getElementById("player-one-avatar");
// CREATE STATS 
let p1stats = document.getElementById("selection-player-one-stats");


// Variables of the Main ARRAY
var warriorClan = warriorArrayV2.length;
var lastWarrior = warriorArrayV2[warriorClan-1];

// Scroll through Warriors 
let i = 0;

previousP1Warrior.addEventListener("click", function(){
  
  if (i === -1){
    i = 3;
  }

  let warrior = warriorArrayV2[i];
  let warrior_image = warrior["img"];
  let warrior_name = warrior["name"];
  let makeName = document.createTextNode(warrior_name);

  createWarriorImage.setAttribute("src", warrior_image);
  createWarriorImage.setAttribute("class", "warrior-image");
  createWarriorImage.setAttribute("height", "375");
  createWarriorImage.setAttribute("alt", warrior_name);
  p1avatar.appendChild(createWarriorImage);

  warriorStats.setAttribute("class", "warrior-stats");

  
  nameHeader.appendChild(makeName);
  warriorStats.appendChild(nameHeader);
  p1stats.appendChild(warriorStats);

  i -= 1;

  return warriorStats;
})

nextP1Warrior.addEventListener("click", function(){

  if (i === 4){
    i = 0;
  }

  let warrior = warriorArrayV2[i];
  let warrior_image = warrior["img"];
  createWarriorImage.setAttribute("src", warrior_image);
  createWarriorImage.setAttribute("class", "warrior-image");
  createWarriorImage.setAttribute("height", "375");
  createWarriorImage.setAttribute("alt", "selected warrior");
  p1avatar.appendChild(createWarriorImage);

  i += 1;
})

// TEST log for new Array
warriorArrayV2.forEach(function (item, index, warriorArrayV2) {
  console.log(item, index);
});

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
