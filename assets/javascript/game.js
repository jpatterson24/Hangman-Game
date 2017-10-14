
//Variable List==============================================================================================================================================
var wordOptions = ["family matters", "fullhouse", "dinosaurs", "blossom", "martin", "the fresh prince of belair"];
var selectedWord =  "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//===========================================================================================================================================================
//Incrementors
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
//===========================================================================================================================================================
function startGame () {

		selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersinWord = selectedWord.split("");
	numBlanks = lettersinWord.length;
	// //game reset
		 guessesLeft =9;
		 wrongLetters = [];
		 blanksAndSuccesses = [];
	
		for (var i=0; i<numBlanks; i++) {
				blanksAndSuccesses.push("_");
	}
						
         document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
         document.getElementById("numGuesses").innerHTML = guessesLeft;
         document.getElementById("winCounter").innerHTML = winCount;
         document.getElementById("lossCounter").innerHTML = lossCount;

         console.log(selectedWord);
         console.log(lettersinWord);
         console.log(numBlanks);
         console.log(blanksAndSuccesses);
	}
         function checkLetter(letter) {
			var isLetterInword = false;

			for (var i=0; i<numBlanks; i++) {
				if (selectedWord[i] == letter) {
					isLetterInword = true;
				}
			}
			if(isLetterInword){
				for (var i=0; i<numBlanks; i++) {
 	        		if(selectedWord[i] == letter) {
					blanksAndSuccesses[i] = letter;
				}
			}
		}
		//letter not found
 			else {
 				wrongLetters.push(letter);
 				guessesLeft--;
 			}
 	} console.log(blanksAndSuccesses);

// check if user won or loss
  function roundComplete() {
  	console.log("Win Count: " + winCount + "| Loss count: " + lossCount + "| Guesses Left: " + guessesLeft);
  	document.getElementById("numGuesses").innerHTML = guessesLeft;
  	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
  	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ")
  	if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
  		winCount++;
  		alert("You Won!!" + "\nThe correct TV show was " + selectedWord);
  		//update the win in the html
  		document.getElementById("winCounter").innerHTML = winCount;
  		
  		startGame();
  	}
  	else if(guessesLeft == 0) {
  		lossCount++;
  		alert("Sorry You lost" + "\nThe correct TV show was " + selectedWord);

  		document.getElementById("lossCounter").innerHTML = lossCount;

  		startGame();
  	}
  }
  		

 		
	startGame();
  	
         // Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
     document.onkeyup = function(event) {
        //Captures the key press, converts it to lowercase, and saves it to a variable.
 		var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
 		checkLetter(letterGuessed);
 		roundComplete();
 		}
	  

