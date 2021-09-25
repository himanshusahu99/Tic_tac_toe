let btn = document.querySelectorAll("button");




let turn = 1;
setPlayer("p1", "p2");
const winningConditions = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]
];

var gameState = ["", "", "", "", "", "", "", "", ""];
let currenPlayer = "X" ; 
for (let item of btn) {
  item.addEventListener("click", (e) => {
    let buttontext = e.target;
    gameState[parseInt(buttontext.id) -1 ] = currenPlayer ;
    console.log(gameState);
    console.log("button is ", buttontext);
    if (turn % 2) {
      buttontext.innerText = "X";
      currenPlayer = "O"; 
      setPlayer("p2", "p1");
    } else {
      buttontext.innerText = "O";
      currenPlayer = "X";
      setPlayer("p1", "p2");
    }
    turn++;
    console.log(turn);
    FindWinner(); 
  });
}


function FindWinner(){
 

  let roundWon = false; 
  for(let i= 0; i<=7; i++){
      let winCondition = winningConditions[i]; 
      let a = gameState[winCondition[0]];; 
      let b = gameState[winCondition[1]];; 
      let c = gameState[winCondition[2]];; 

        console.log(a + " a is " +  gameState[winCondition[0]])
        console.log(b + " b  " +  gameState[winCondition[1]])
        console.log(c + " c " +  gameState[winCondition[2]])

      if(a == "" || b == "" || c == "") continue;

      if(a == b && b==  c  && c == "X") {
        
        window.alert("Congratulations! Player1 wins"); 
        console.log("---------------------------------"); 
        setButton(); 
        break;
      
      
      }
      else 
      if(a == b && b==  c  && c == "O") {
        
        window.alert("Congratulations! Player2 wins"); 
        console.log("---------------------------------")
        setButton(); 
                break;
      
      
      }
      else if( turn == 10) {
        
         window.alert("Draw!"); 
         setButton(); 

      }


  }



}


function setButton(){
  let box = document.getElementById("box"); 
  for(let i =1 ; i<10; i++){
    let a = document.getElementById(i);  
    a.innerHTML = ""; 

    gameState[i-1] = ""; 
    currenPlayer = "X" ; 
    turn = 1; 
    setPlayer("p1", "p2");

    

  }
}


function setPlayer(currentPlayer, LastPlayer){ 
  document.getElementById(currentPlayer).style.background= "#1B51A8"; 
  document.getElementById(currentPlayer).style.color= "#fff"; 
  document.getElementById(LastPlayer).style.background= ""; 
  document.getElementById(LastPlayer).style.color= "#000"; 
;
}
