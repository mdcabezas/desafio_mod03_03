/*
        function pintar(){
        ele = document.getElementById("ele1")
        ele.style.backgroundColor = 'yellow'
        }
        ele = document.getElementById("ele1")
        ele.addEventListener("click", pintar);
*/

        const pintar = (color = "green") => ele.style.backgroundColor = color
        let ele = document.getElementById("ele1");
        ele.addEventListener("click",() => pintar("yellow"));