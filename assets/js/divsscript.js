let color = "#ffffff";

document.addEventListener("keydown", (e) => {
    if (e.key === "a") {
        color = "#0000ff"
    } else if (e.key === "s") {
        color = "#00ff00"
    } else if (e.key === "d") {
        color = "#800000"
    }
})

const changeColor = (id, newcolor) => document.querySelector("#" + id).style.backgroundColor = newcolor

document.addEventListener("click", (e) => changeColor(e.target.id, color))