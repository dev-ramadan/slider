const test = document.querySelectorAll(".items img");
test.forEach((items)=>{
    items.onclick = function (e) {
        let show = document.querySelector(".show");
        show.src = e.target.src;
        let changColor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let myColor = [];
        for (let i = 0; i < 6; i++) {
            myColor.push(changColor[Math.floor(Math.random() * changColor.length)]);
        }
        let finleColor = `#${myColor.join("")}`;
       const color = document.querySelector(".circle");
       color.style.backgroundColor = finleColor;
}
    
})
