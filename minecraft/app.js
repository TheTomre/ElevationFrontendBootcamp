let pickedTool = "none"
document.querySelectorAll(".tool").forEach((tool) => {
    tool.addEventListener("click", function () {
        removePickedTool();
        this.classList.toggle("green-click");
        pickedTool = this.getAttribute("tool");
        console.log(pickedTool)

    });
});

function removePickedTool() {
    document.querySelectorAll(".tool").forEach((tool) => {
        tool.classList.remove("green-click");
    });
}
