        // function pintar() {
        //     ele = document.getElementById("ele1")
        //     ele.style.backgroundColor = 'yellow'
        // }
        const pintar = (color) => ele.style.backgroundColor = color
        let ele = document.getElementById("ele1");
        ele.style.backgroundColor = "green";
        ele.addEventListener("click",() => pintar("yellow"));