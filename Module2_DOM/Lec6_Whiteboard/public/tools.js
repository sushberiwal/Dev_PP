let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");

let activeTool = "pencil";

pencil.addEventListener("click" , function(){
    if(activeTool == "pencil"){
        // pencil options open ya close honge
    }
    else{
        activeTool = "pencil";
        ctx.strokeStyle = "black";
    }
})

eraser.addEventListener("click" , function(){
    if(activeTool == "eraser"){
        // eraser options open ya close honge
    }
    else{
        activeTool = "eraser";
        ctx.strokeStyle = "white";
    }
})