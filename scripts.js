function roll() {
  let dice = document.getElementById("dice");

  //Random function for getting random numbers from 1 to 6 when we roll a dice, +1 is added to avoid '0'
  let random = Math.floor(Math.random() * 6) + 1;

  let audio = document.getElementById("diceAudio");
  audio.play();

  //This class is added to the  dice class when the button is clicked
  dice.classList.add("spin");

  //Inorder to remove th class and to know the difference in transition, we add the remove class function in setTimeout.
  // setTimeout(function delay)
  //delay is always in milliseconds, 1 sec=1000 milliseconds
  setTimeout(function () {
    dice.classList.remove("spin");
    dice.innerText = random;
  }, 1000);
}
