// checking if flipped car
function checkFlipped(): any {
  let matchs: any = document.querySelectorAll(".flipped");
  if (matchs.length >= 2) {
    //block cards from flipping
    let block: any = document.querySelectorAll(".solitaire");
    block.forEach((element: any) => {
      element.classList.add("blocked")
      setTimeout(() => {
        element.classList.remove("blocked");
      }, 2250);
    });
    //getting flipped card index
    let firstCard: string = matchs[0].children[1].getAttribute("src");
    let secondCard: string = matchs[1].children[1].getAttribute("src");
    checkMatched(firstCard, secondCard);
  }
}

//check if cards going to be matched
let cardsMatched: number = 0;
function checkMatched(first: string, second: string) {
  // extracting numbers from image source
  let one: any = first.match(/\d+/g),
    two: any = second.match(/\d+/g);

  //macth the card
  let check = document.querySelectorAll(".flipped");
  if (
    (+one % 2 === 1 && +two - +one === 1) ||
    (+two % 2 === 1 && +one - +two === 1)
  ) {
    check.forEach((element) => {
      //block cards from flipping
      let blocks: any = document.querySelectorAll(".solitaire");
      blocks.forEach((ele: any) => {
        setTimeout(() => {
          ele.classList.remove("blocked");
        }, 1000);
      });
      setTimeout(() => {
        element.classList.add("matched");
        element.classList.remove("flipped");
      }, 1000);
      cardsMatched++;
      // check if game over
      if (arr.length === cardsMatched) {
        setTimeout(() => {
          gameOver();
        }, 1000);
      }
    });
  }

  //unflip the cards
  else {
    check.forEach((element) => {
      setTimeout(() => {
        element.classList.remove("flipped");
      }, 1500);
      setTimeout(() => {
        element.classList.add("unflipped");
      }, 1500);
      setTimeout(() => {
        element.classList.remove("unflipped");
      }, 2250);
    });
  }
}
