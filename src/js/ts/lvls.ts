//checking level
let count: number = document.querySelectorAll(".solitaire").length;
let lvl: string = "";
if (count === 28) {
  lvl = "easy";
} else if (count === 40) {
  lvl = "meduim";
} else if (count === 54) {
  lvl = "hard";
} else {
  throw new Error(`wrong level`);
}

//setting card's image numbers depend on levels
let arr: number[] = [];
try {
  if (lvl === "easy") {
    for (let i = 27; i <= 54; i++) {
      arr.push(i);
    }
  } else if (lvl === "hard") {
    for (let i = 1; i <= 54; i++) {
      arr.push(i);
    }
  } else if (lvl === "meduim") {
    for (let i = 1; i <= 20; i++) {
      arr.push(i);
    }
    for (let i = 27; i <= 46; i++) {
      arr.push(i);
    }
  }
} catch (err: any) {
  throw new Error(err);
}

//scatting array
arr.forEach((element, index) => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  [arr[index], arr[randomNumber]] = [arr[randomNumber], element];
});
