// relate clicks with flipping cards
let ele = document.querySelectorAll(".solitaire");
ele.forEach((current) => {
  current.addEventListener("click", () => {
    try {
      current.classList.add("flipped");
      checkFlipped();
    } catch {
      throw new Error("");
    }
  });
});
