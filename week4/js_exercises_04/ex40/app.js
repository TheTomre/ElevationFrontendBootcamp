function createBtn(name) {
    let newBtn = document.createElement("button");
    newBtn.textContent = name;
    document.body.appendChild(newBtn)
    return newBtn
}
let size = 20;
const p = document.getElementsByTagName("p")[0]
p.style.fontSize = `${size}px`;

const increaseBtn = createBtn("+")
increaseBtn.addEventListener("click", () => {
    if (size <= 100) {
        size++;
    p.style.fontSize = `${size}px`;
    }

})

const decreaseBtn = createBtn("-")
decreaseBtn.addEventListener("click", () => {
    if (size >= 6) {
        size--;
    p.style.fontSize = `${size}px`;
    }

})

