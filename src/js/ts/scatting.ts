//setting solitaire images on sources
let element = document.querySelectorAll(".back");
for (let i = 0; i < element.length; i++) {
  element[i].setAttribute("src", `../images/img${arr[i]}.png`);
}
