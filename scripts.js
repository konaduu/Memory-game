//holds card in one array
let card = document.getElementsByClassName('memory-card');
let cards = [...memory-card];

// Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }


  // deck of all cards in game
const deck = document.querySelector(".deck");
function startGame(){
   var shuffledCards = shuffle(cards);
   for (var i= 0; i < shuffledCards.length; i++){
      [].forEach.call(shuffledCards, function(item){
         deck.appendChild(item);
      });
   }
}


//once the page loads startgame
window.onload = startGame();




//add opened cards to OpenedCards list and check if cards are match or not
function cardOpen() {
   openedCards.push(this);
   var len = openedCards.length;
   if(len === 2){
       moveCounter();
       if(openedCards[0].type === openedCards[1].type){
           matched();
       } else {
           unmatched();
       }
   }
};

//for when cards match
function matched(){
   openedCards[0].classList.add("match");
   openedCards[1].classList.add("match");
   openedCards[0].classList.remove("show", "open");
   openedCards[1].classList.remove("show", "open");
   openedCards = [];
}

//for when cards don't match
function unmatched(){
   openedCards[0].classList.add("unmatched");
   openedCards[1].classList.add("unmatched");
   disable();
   setTimeout(function(){
       openedCards[0].classList.remove("show", "open", "unmatched");
       openedCards[1].classList.remove("show", "open", "unmatched");
       enable();
       openedCards = [];
   },1100);
}

//disable cards temporarily
function disable(){
   Array.prototype.filter.call(cards, function(card){
       card.classList.add('disabled');
   });
}

//enable cards and disable matched cards
function enable(){
   Array.prototype.filter.call(cards, function(card){
       card.classList.remove('disabled');
       for(var i = 0; i < matchedCard.length; i++){
           matchedCard[i].classList.add("disabled");
       }
   });
}


function moveCounter(){    
   moves++;    
   counter.innerHTML = moves;
}


//game timer
var second = 0, minute = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}




function moveCounter(){
   moves++;
   counter.innerHTML = moves;
   //start timer on first move
   if(moves == 1){
       second = 0;
       minute = 0; 
       hour = 0;
       startTimer();
   }