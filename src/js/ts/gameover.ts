// function close the game when all cards has been matched
function gameOver() {
  let gameover: any = document.querySelector(".gameon");
  setTimeout(() => {
    gameover.classList.add("gameover");
    gameover.classList.remove("gameon");
  }, 1000);
}
