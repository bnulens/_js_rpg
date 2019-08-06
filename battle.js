let selectionAvatarOne = document.getElementById("player-one-avatar");
let selectionAvatarTwo = document.getElementById("player-two-avatar");


import Person from "./character.js";

    let Knight = new Person ("Human",);
    let Troll = new Person ("Troll", );
    let Elf = new Person ("Elves", );
    let Ghoul = new Person ("Ghoul", );

let playerOneAttack = Math.floor(Math.random() * Person.maxDamage);


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