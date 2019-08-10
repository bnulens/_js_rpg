// let playerOneAttack = Math.floor(Math.random() * Person.maxDamage);

// /*------------------------------------*/
// 
// CREATION PAGE SCRIPT
// 
// Creating an Array for the various character images
const warriorArray = [
  {
    img: 'images/samurai.png',
    name: 'Hideyoshi',
    race: 'Human',
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
    race: 'Troll',
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
    maxDeflect: 15,
  }
]

// CREATE AVATAR
const createWarriorImage = document.createElement('IMG');
const warriorStats = document.createElement('div');
const nameHeader = document.createElement('h2');
const createWarriorName = document.createElement('div');

let previousP1Warrior = document.getElementById("previous-one");
let nextP1Warrior = document.getElementById("next-one");
const p1avatar = document.getElementById("player-one-avatar");
const p2avatar = document.getElementById("player-two-avatar");
// CREATE STATS 
let p1stats = document.getElementById("selection-player-one-stats");


// Variables of the Main ARRAY
var warriorClan = warriorArray.length;
var lastWarrior = warriorArray[warriorClan-1];
var firstWarrior = warriorArray[warriorClan[0]];

// Scroll through Warriors 
let i = 0;

document.addEventListener('click', function(e){
  if (e.target.matches("#previous-one")){
    displayWarrior()
    i -= 1;
    if (i === -1){
      i = 3;
    } 
  } if (e.target.matches("#next-one")){
    displayWarrior()
    i += 1;
    if (i === 4){
      i = 0;
    } 
  }
});

document.addEventListener('click', function(f){
  if (f.target.matches("#previous-two")){
    displayWarrior()
    i -= 1;
    if (i === -1){
      i = 3;
    }
  } if (f.target.matches("#next-two")){
    displayWarrior()
    i += 1;
    if (i === 4){
      i = 0;
    } 
  }
});

function displayWarrior() {
  if (p1stats.childNodes.length > 0) {
    p1stats.removeChild(p1stats.childNodes[0]);
  }
  var warriorImage = getWarriorImage();
  var warriorInfo = getWarriorInfo();

  p1avatar.appendChild(createWarriorImage);
  p1stats.appendChild(warriorInfo);
  p2avatar.innerHTML = p1avatar.innerHTML;
}

function getWarriorImage(){

  let warrior = warriorArray[i];
  let warrior_image = warrior["img"];
  createWarriorImage.setAttribute("src", warrior_image);
  createWarriorImage.setAttribute("class", "warrior-image");
  createWarriorImage.setAttribute("height", "425");
  createWarriorImage.setAttribute("alt", "selected warrior");
}

function getWarriorInfo() {
  // create the elements we want to add
  var div = document.createElement("div");
  var header = document.createElement('h2');
  var raceStat = document.createElement("P");
  var healthStat = document.createElement("P");
  var maxHealthStat = document.createElement("P");
  var deflectStat = document.createElement("P");
  
  // add classes for styling
  div.setAttribute("class", "warrior-stats");
  raceStat.setAttribute("class", "race");
  healthStat.setAttribute("class", "health");
  maxHealthStat.setAttribute("class", "max-health");
  deflectStat.setAttribute("class", "deflect");
  
  // collect the info we want to display
  let warrior = warriorArray[i];
  var warriorName = document.createTextNode(`${warrior.name}` + "\n");
  var warriorRace = document.createTextNode(` race: ${warrior.race} `);
  var warriorHealth = document.createTextNode(` HP ${warrior.maxHealth} `);
  var warriorMaxHealth = document.createTextNode(`heal: ${warrior.maxHealing} `);
  var warriorDeflect = document.createTextNode(`DEF: ${warrior.maxDeflect} `);

  // append to the elements
  header.appendChild(warriorName);
  raceStat.appendChild(warriorRace);
  healthStat.appendChild(warriorHealth);
  maxHealthStat.appendChild(warriorMaxHealth);
  deflectStat.appendChild(warriorDeflect);

  // append to our div
  div.appendChild(warriorName);
  div.appendChild(warriorRace);
  div.appendChild(warriorHealth);
  div.appendChild(warriorMaxHealth);
  div.appendChild(warriorDeflect);

  p1stats.appendChild(div);
  
  return div;
}

// TEST log for new Array
// warriorArray.forEach(function (item, index, warriorArray) {
//   console.log(item, index);
// });
// 

// ACTIVE/INACTIVE state for Items
var itemSelect = document.getElementById("selection-player-one-items");
var itemButtons = itemSelect.getElementsByClassName("item-p1");
for (var k = 0; k < itemButtons.length; k++) {
  itemButtons[k].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

var itemSelectV2 = document.getElementById("selection-player-two-items");
var itemButtonsV2 = itemSelectV2.getElementsByClassName("item-p2");
for (var l = 0; l < itemButtonsV2.length; l++) {
  itemButtonsV2[l].addEventListener("click", function() {
  var currentV2 = document.getElementsByClassName(" active2");
  if (currentV2.length > 0) { 
    currentV2[0].className = currentV2[0].className.replace(" active2","");
  }
  this.className += " active2";
  });
}

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
