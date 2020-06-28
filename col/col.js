const colors = ["#FF5733", "#808000", "#00FF00", "#FA8072",  "#E9967A", "#999999"]
const container = document.querySelector(".container")


const changeColor = () =>{
    var background = Math.floor(Math.random()*colors.length);
    container.style.backgroundColor = colors[background];
   
}