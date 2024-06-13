let randomNumber = parseInt (Math.random()*100 + 1)

let submit = document.querySelector(".submit")
let userInput = document.querySelector(".guessfield")
let prevguess = document.querySelector(".preguess")
let remaning  = document.querySelector(".lastresult")
let loworhi  = document.querySelector(".loworhi")
let startOver =document.querySelector(".ressut")

const p = document.createElement("p");

let playerguess = [];
let chanceleft = 1;

let playgame = true;


if(playgame){
    submit.addEventListener("click",function(e){
        e.preventDefault();
     const guess = parseInt(userInput.value);
     console.log(guess)
     validationguess(guess);
    })
}

function validationguess(guess){
  if(isNaN(guess)){
    alert(`Please enter vaild number`)
  }
  else if(guess < 1){   
  alert(`Please enter more than 1 `)
  }
  else if (guess > 100){ 
  alert(`Please ender less than 100`)
  }
  else{
    playerguess.push(guess);
    if (chanceleft === 11) {
        displayguess(guess)
        displaymessage(`You lose the Game and Random Number was ${randomNumber}`)
        endgame();
    }
    else{
        displayguess(guess)
        checkguess(guess)
    }
  }
}

function checkguess(guess){
    if(guess === randomNumber){
        displaymessage(`You won the Game`)
        endgame();
    }
    else if(guess > randomNumber){
        displaymessage(`Your number is Too High`)
    }
    else if(guess < randomNumber){
        displaymessage(`Your number is Too Low`)
    }

}

function displayguess(guess){
  userInput.value ="";
  prevguess.innerHTML += `${guess} , `
  chanceleft++;
  remaning.innerHTML = `${11 - chanceleft}`

}
 
function displaymessage(message){
  loworhi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
    userInput.value = "";
    userInput.setAttribute("disabled","");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newgame">Start new Game</h2>`
    startOver.appendChild(p)
    playgame = false;
    startgame();
}

function startgame(){
  const newstartbutton = document.querySelector("#newgame");
  newstartbutton.addEventListener("click",function(e){
    randomNumber = parseInt (Math.random()*100 + 1)
    playerguess = [];
    chanceleft = 1;
    prevguess.innerHTML = '';
    remaning.innerHTML = `${11 - chanceleft}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playgame = true


  })
}
