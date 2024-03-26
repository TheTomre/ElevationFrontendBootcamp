let pickedTool = "none";

document.querySelectorAll(".tool").forEach((tool) => {
    tool.addEventListener("click", function () {
        removePickedTool();
        this.classList.toggle("picked");
        pickedTool = this.getAttribute("tool");
    });
});

function removePickedTool() {
    document.querySelectorAll(".tool").forEach((tool) => {
        tool.classList.remove("picked");
    });
}

const width = 23;
const height = 15;
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

function crateWorld() {
    const worldElement = document.getElementById("world");
    worldElement.innerHTML = "";

    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            const tileElement = document.createElement("div");
            tileElement.classList.add("tile");
            if (map[row][col] === 0) {
                tileElement.classList.add("sky");
                tileElement.setAttribute("tile-type", "sky")
            } else if (map[row][col] === 1) {
                tileElement.classList.add("cloud");
                tileElement.setAttribute("ttileype-type", "cloud")
            } else if (map[row][col] === 2) {
                tileElement.classList.add("tree");
                tileElement.setAttribute("tile-type", "tree")
            } else if (map[row][col] === 3) {
                tileElement.classList.add("dirt");
                tileElement.setAttribute("tile-type", "dirt")
            } else if (map[row][col] === 4) {
                tileElement.classList.add("grass");
                tileElement.setAttribute("tile-type", "grass")
            } else if (map[row][col] === 5) {
                tileElement.classList.add("stone");
                tileElement.setAttribute("tile-type", "stone")
            }

            worldElement.appendChild(tileElement);
        }
    }
}


crateWorld();

const inventory = document.getElementById("invent-box");

document.querySelectorAll(".tile").forEach((tile) => {
    tile.addEventListener("click", function () {
        const tileType = this.getAttribute("tile-type");
        if (
            (tileType === "tree" && pickedTool === "axe") ||
            (tileType === "grass" && pickedTool === "shovel") ||
            (tileType === "dirt" && pickedTool === "shovel") ||
            (tileType === "stone" && pickedTool === "pickaxe")
        ) {
            this.classList.remove(tileType);
            this.classList.add("sky");
            // inventory.classList.toggle()
            inventory.classList.add(tileType)
        }
    });
});
