let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
let randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

let randomImage1 = "./images/dice" + randomNumber1 + ".png"; //1-6 image path
let randomImage2 = "./images/dice" + randomNumber2 + ".png"; //1-6 image path

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

let winner = 0;
if (randomNumber1 > randomNumber2) winner = 1;
else if (randomNumber2 > randomNumber1) winner = 2;

let winnerAnnouncement = "It's a Tie";
if (winner == 1) winnerAnnouncement = "Player 1 Won";
else if (winner == 2) winnerAnnouncement = "Player 2 Won";

let winnerTextNode = document.createTextNode(winnerAnnouncement);

document.querySelector("h1").textContent = winnerAnnouncement;

document.getElementById("button").addEventListener("click", () => {
  location.reload();
});
