function Person(race,item){
  this.race = race;
  this.item = item;
  this.currenthealth = 100;
  this.maxHealth = 100;
  
  this.min = 3;
  this.maxDamage = 20;
  this.maxHealing = 30;

  this.heal = function(){};

  this.damage = function(){};

  this.totalDamage = this.damage();

  displayChar(this.race,this.item,this.maxHealth);
}
    
let Knight = new Person ("Human","Longsword",);
let Troll = new Person ("Troll","Axe", );
let Elf = new Person ("Elves","" );
let Ghoul = new Person ("Ghoul","Necromantics", );

// let playerOneAttack = Math.floor(Math.random() * Person.maxDamage);
var selectAvatarOne = document.getElementById("player-one-avatar");
let selectAvatarTwo = document.getElementById("player-two-avatar");

// Creating an Array for the various character images
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/img/Splash_image1.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'images/img/Splash_image2.jpg';

/* ... more images ... */

imgArray[5] = new Image();
imgArray[5].src = 'images/img/Splash_image6.jpg';

/*------------------------------------*/

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
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

