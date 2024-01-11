let count = 0;
let newText = document.getElementById("text");
let newdel = document.getElementById("deleted");

function increment() {
  count += 1;
  newText.textContent = count;
}

function minus() {
  count -= 1;
  newText.textContent = count;
}
