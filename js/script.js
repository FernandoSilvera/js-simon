const numbersSequence = document.getElementById("numbers");
const numsAmount = 5;
const randomNums = [];
const userNums = [];
const correctNums = [];

for (let i = 0; i < numsAmount; i++) {
  const randomNum = Math.ceil(Math.random() * 100);

  // Check if number is already in array
  if(randomNums.includes(randomNum)) {
    i--;
  } else {
    randomNums.push(randomNum);
    numbersSequence.innerHTML += " " + randomNums[i] + " ";
  }   
}

function simonSays () {
  numbers.remove(randomNums);

  setTimeout (askUserNums, 1);
  setTimeout (checkSequence, 1);
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

// Check correct numbers and visualize it
function checkSequence() {
  for (let i = 0; i < numsAmount; i++) {
    if (randomNums.includes(userNums[i])) {
      correctNums.push(userNums[i]);
    } 
  }

  alert(`Numbers guessed: ${correctNums.length} (${correctNums})`)
}

// Play after 30 secs
setTimeout (simonSays, 30000);