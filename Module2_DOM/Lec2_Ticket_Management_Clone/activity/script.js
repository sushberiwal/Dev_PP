let filterCodes = {
    "red":"#e74c3c",
    "blue":"#3498db",
    "green":"#2ecc71",
    "black":"#34495e"
}


let allFilters = document.querySelectorAll(".ticket-filters div");
let ticketContainer = document.querySelector(".tickets-container");

// [ <div></div> ,<div></div> ,<div></div> ,<div></div>  ];

for (let i = 0; i < allFilters.length; i++) {
  allFilters[i].addEventListener("click", chooseFilter);
}

function chooseFilter(e) {
  let filter = e.target.classList[1];
  let filterCode = filterCodes[filter];
  ticketContainer.style.background = filterCode;
}
