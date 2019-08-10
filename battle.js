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

// Players
let player1 = {}
let player2 = {}

// Get elements we will need
const p1avatar = document.getElementById("player-one-avatar");
const p2avatar = document.getElementById("player-two-avatar");

const p1stats = document.getElementById("selection-player-one-stats");
const p2stats = document.getElementById("selection-player-two-stats");

// To scroll through Warriors 
let warriorIndex = 0;

document.addEventListener('click', function(e){
  if (e.target.matches("#previous-one")){
    displayWarrior(p1stats, p1avatar, 'player-one')
    warriorIndex -= 1;
    if (warriorIndex === -1){
      warriorIndex = 3;
    } 
  } if (e.target.matches("#next-one")){
    displayWarrior(p1stats, p1avatar, 'player-one')
    warriorIndex += 1;
    if (warriorIndex === 4){
      warriorIndex = 0;
    } 
  }
});

document.addEventListener('click', function(e){
  if (e.target.matches("#previous-two")){
    displayWarrior(p2stats, p2avatar, 'player-two')
    warriorIndex -= 1;
    if (warriorIndex === -1){
      warriorIndex = 3;
    }
  } if (e.target.matches("#next-two")){
    displayWarrior(p2stats, p2avatar, 'player-two')
    warriorIndex += 1;
    if (warriorIndex === 4){
      warriorIndex = 0;
    } 
  }
});

function displayWarrior(statsNode, avatarNode, player) {
  if (statsNode.childNodes.length > 0) {
    statsNode.removeChild(statsNode.childNodes[0]);
    avatarNode.removeChild(avatarNode.childNodes[0]);
  }

  var warriorImage = setWarriorImage(player);
  var warriorInfo = getWarriorInfo();

  avatarNode.appendChild(warriorImage);
  statsNode.appendChild(warriorInfo);
}

function setWarriorImage(player){
  let warrior = warriorArray[warriorIndex];
  let warrior_image = warrior["img"];
  
  if (player === 'player-one') {
    player1 = warrior;
    console.log('player1', player1);
  } else {
    player2 = warrior;
    console.log('player2', player2);
  }

  let img = document.createElement('IMG');
  img.setAttribute("src", warrior_image);
  img.setAttribute("class", "warrior-image");
  img.setAttribute("height", "425");
  img.setAttribute("alt", "selected warrior");

  return img;
}

function getWarriorInfo() {
  // create the elements we want to add
  var div = document.createElement("div");
  div.setAttribute("class", "warrior-stats");

  var header = document.createElement('h2');
  var raceStat = document.createElement("P");
  raceStat.setAttribute("class", "race");

  var healthStat = document.createElement("P");
  healthStat.setAttribute("class", "health");

  var maxHealthStat = document.createElement("P");
  maxHealthStat.setAttribute("class", "max-health");

  var deflectStat = document.createElement("P");
  deflectStat.setAttribute("class", "deflect");
  
  // collect the info we want to display
  let warrior = warriorArray[warriorIndex];
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

function randomizeWarriorIndex() {
  const oldIndex = warriorIndex;
  warriorIndex = Math.floor(Math.random() * warriorArray.length);
}

//  randomize i to get a random character for player 1 at initial page load
randomizeWarriorIndex();
displayWarrior(p1stats, p1avatar, 'player-one');

//  randomize i again, to get a random character for player 2 at initial page load
randomizeWarriorIndex();
displayWarrior(p2stats, p2avatar, 'player-two');