let chatInput = document.querySelector(".chat-input");
let chatWindow =  document.querySelector(".chat-window");

let username = prompt("Enter Your Name ");

chatInput.addEventListener("keypress" , function(e){
    console.log(e);
    if(e.key == "Enter"){
        console.log("inside key enter");
        let chatDiv = document.createElement("div");
        chatDiv.classList.add("chat");
        chatDiv.classList.add("right");
        chatDiv.textContent = username+ " : " +chatInput.value;
        chatWindow.append(chatDiv);
        chatInput.value = "";
    }
})