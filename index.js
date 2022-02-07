let count = 0;
let str = "";
let CountEl = document.getElementById("count-el");
let Display = document.getElementById("DisStr");
function increment() {
    count++;
    CountEl.innerText = count;
}
function save() {
    str = str + count;
    Display.innerText = str;
    str += " - "
    count = 0
    CountEl.innerText = count;
}