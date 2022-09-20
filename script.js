

//object visible to all the fxns 
const totalScore={
  computerScore:0,
  playerScore:0
}
 //fxn to generate computer choice 
function getComputerChoice() {
 const rpsChoice=['Rock','Paper','Scissors']
 const computerChoice=rpsChoice[Math.floor(Math.random()*3)]
 return computerChoice
  
 
 //console.log(computerChoice[randomChoice])
}

 //fxn that checks who win and return score 
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  if(playerChoice==computerChoice)
  {score=0;

    }
  else if((playerChoice=="Rock"&&computerChoice=='Scissors')||(playerChoice=='Paper'&&computerChoice=="Rock")||(playerChoice=="Scissors"&&computerChoice=="Paper"))
 {score=1;
} 
  else 
  {score=-1;
  }
 

  //return score
return score;
 }
 
   
// ** Calculate who won and show it on the screen ***/
//onclick i get the computerchoice,i get score and update the score
//accepts score ,playerchoice and computer choice ....it prints the appropriate msg on dom based on the score
function showResult(score, playerChoice, computerChoice) {
   console.log(playerChoice)
   console.log(computerChoice)
   console.log(score)
const resultDiv=document.getElementById('result')
 
const handsDiv=document.getElementById('hands')
 
const playerScoreDiv=document.getElementById('player-score')
 
if(score==-1)
resultDiv.innerText='You Lose'
else if (score==0)
resultDiv.innerText='It is a tie'
else 
resultDiv.innerText=`You Won `
 
handsDiv.innerText =`🧑${playerChoice} vs 🤖${computerChoice}`
playerScoreDiv.innerText=`Your score:${totalScore['playerScore']}`
 


}
   
/*the fxn which takes 
 1.computerchoice by calling getcomputerchoice 
 2.get the score from getresult fxn
 3.update the player score on the object total score 
 4.calls the showresult fxn which calls the result 

  
*/
function onClickRPS(playerChoice) {

   const computerChoice=getComputerChoice()
 //console.log(computerChoice)//to get the computer choice from the fxn 
   const score = getResult(playerChoice,computerChoice)
    //console.log(score)
   //to get the score from the get result fxn 
     totalScore['playerScore']+=score
     //console.log(totalScore.playerScore)
    showResult(score,playerChoice,computerChoice)//to dispay the result on the screen 

} 
//onClickRPS('Rock') 





// the fxn playgame is to select hte buttons and call onclickrps fxn when invoked by passing rpsbutton.value as arguemnet 
function playGame() {
console.log("hello")
let rpsButtons=document.querySelectorAll(".rpsButton")
//let mem =rpsButtons.value
//console.log(mem)
 //this loops through the buttons.when  a particular button is selected (onclick event),the rpsButton which is equiavlent to i ,the value is returned as an arguement to the onclickrps fxn
rpsButtons.forEach(rpsButton => {
   rpsButton.onclick =() =>onClickRPS(rpsButton.value)
   
}) 

const endGameButton =document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)
}


//to clear the contents of the page after pressing the end button

function endGame(totalScore) {
  totalScore['playerScore']=0
  console.log("tadaaaaa")
  console.log(totalScore['playercore'])
  totalScore['computerScore']=0
  const resultDiv=document.getElementById('result')
  const handsDiv=document.getElementById('hands')
  const playerScoreDiv=document.getElementById('player-score')
  resultDiv.innerText='';
 handsDiv.innerText='';
 playerScoreDiv.innerText='';

}

playGame() 

  /*
  // use querySelector to select all RPS Buttons

  * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **

 */