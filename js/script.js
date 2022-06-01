const numbersSequence = document.getElementById("numbers");
const numsAmount = 5;
const randomNums = [];
const userNums = [];
const correctNums = [];

for (let i = 0; i < numsAmount; i++) {
  const randomNum = Math.ceil(Math.random() * 20);

  // Check if number is already in array
  if(randomNums.includes(randomNum)) {
    i--;
  } else {
    randomNums.push(randomNum);
    numbersSequence.innerHTML += randomNums[i] + " - ";
  }   
}

function hideSequence () {
  numbers.remove(randomNums);

  askUserNums();
  checkSequence();
  alert(`Numbers guessed: ${correctNums.length} (${correctNums})`)
}

// Ask the user to repeat the random numbers
function askUserNums () {
  for (let i = 0; i < numsAmount; i++) {
    const userNum = parseInt(prompt("Repeat the previous numbers!"));

    if (userNums.includes(userNum)) {
      alert("You've already entered this number")
    } else {
      userNums.push(userNum);
    }
  }
}

function checkSequence() {
  for (let i = 0; i < numsAmount; i++) {
    if (randomNums.includes(userNums[i])) {
      correctNums.push(userNums[i]);
    } 
  }
}

// Hide the sequence for 30 secs
setTimeout (hideSequence, 3000);