const map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 5, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3],
    [5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 3, 5, 5, 5, 5, 3, 5, 5, 5, 3, 5, 5, 3],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 3],
    [5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
];

let pickedTool = "none";

const inventory = {
    item: "none",
    picked: false
}

const inventBox =  document.getElementById('invent-box');


function removePickedTool() {
    document.querySelectorAll(".tool").forEach((tool) => {
        tool.classList.remove("picked");
    });
}

function createWorld() {
    const worldElement = document.getElementById("world");
    worldElement.innerHTML = "";
    pickedTool = "none";
    inventory.item = "none";
    inventory.picked = false;

    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            const tileElement = document.createElement("div");
            tileElement.classList.add("tile");
            if (map[row][col] === 0) {
                tileElement.classList.add("sky");
            } else if (map[row][col] === 1) {
                tileElement.classList.add("cloud");
            } else if (map[row][col] === 2) {
                tileElement.classList.add("tree");
            } else if (map[row][col] === 3) {
                tileElement.classList.add("dirt");
            } else if (map[row][col] === 4) {
                tileElement.classList.add("grass");
            } else if (map[row][col] === 5) {
                tileElement.classList.add("stone");
            }

            worldElement.appendChild(tileElement);
        }
    }
}


document.querySelectorAll(".tool").forEach((tool) => {
    tool.addEventListener("click", function () {
        removePickedTool();
        this.classList.toggle("picked");
        pickedTool = this.getAttribute("tool");
    });
});




function updateInventory(newItem) {
    const inventoryBox = document.getElementById('invent-box');
    inventoryBox.classList.remove(inventory.item);
    inventoryBox.classList.add(newItem);
    inventory.item = newItem;
}

inventBox.addEventListener("click", () => {
    removePickedTool();
    pickedTool = "none";
    inventory.picked = true;
    
})

document.querySelectorAll(".tile").forEach((tile) => {
    tile.addEventListener("click", function () {
        if (this.classList.contains("tree") && pickedTool === "axe") {
            this.classList.remove("tree");
            this.classList.add("sky");
            updateInventory("tree");
        } else if (
            this.classList.contains("grass") &&
            pickedTool === "shovel"
        ) {
            this.classList.remove("grass");
            this.classList.add("sky");
            updateInventory("grass")
        } else if (this.classList.contains("dirt") && pickedTool === "shovel") {
            this.classList.remove("dirt");
            this.classList.add("sky");
            updateInventory("dirt");
        } else if (
            this.classList.contains("stone") &&
            pickedTool === "pickaxe"
        ){
            this.classList.remove("stone");
            this.classList.add("sky");
            updateInventory("stone");
        } else if (pickedTool === "none" && inventory.picked === true && this.classList.contains("sky") ) {
            this.classList.remove("sky");
            this.classList.add(inventory.item);
            updateInventory("none")
            inventory.picked = false;
            
            
        }
    });
});


createWorld();
