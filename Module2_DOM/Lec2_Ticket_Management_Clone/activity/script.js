let filterCodes = {
  red: "#e74c3c",
  blue: "#3498db",
  green: "#2ecc71",
  black: "#34495e",
};

// this is the default filter selected for tickets !!!
let selectedFilter = "black";

let allFilters = document.querySelectorAll(".ticket-filters div");
let ticketContainer = document.querySelector(".tickets-container");
let openModalBtn = document.querySelector(".open-modal");

openModalBtn.addEventListener("click", handleOpenModal);

function handleOpenModal(e) {
  let modal = document.querySelector(".modal");
  // if modal already exists in document then return !!
  if (modal) {
    return;
  }
  // else created a div with class modal
  let modalDiv = createModal();
  // to empty modal text box add a click event on modal text box
  modalDiv
    .querySelector(".modal-textbox")
    .addEventListener("click", clearModalTextBox);

  // to add ticket when pressing enter in the modal text box !!!  
  modalDiv
    .querySelector(".modal-textbox")
    .addEventListener("keypress", addTicket);

  // get all modal filters  
  let allModalFilters = modalDiv.querySelectorAll(".modal-filter");

  for (let i = 0; i < allModalFilters.length; i++) {
    // add a click event on every modal filter
    allModalFilters[i].addEventListener("click", chooseModalFilter);
  }


  // append modalDiv on the ui !!
  ticketContainer.append(modalDiv);
}

function createModal() {
  let modalDiv = document.createElement("div");
  modalDiv.classList.add("modal");
  modalDiv.innerHTML = `<div class="modal-textbox" data-typed="false" contenteditable="true">
  Enter your task here
 </div>
<div class="modal-filter-options">
  <div class="modal-filter red"></div>
  <div class="modal-filter blue"></div>
  <div class="modal-filter green"></div>
  <div class="modal-filter black active-filter"></div>
</div>`;
  return modalDiv;
}

function chooseModalFilter(e) {
  // get the filter name which is clicked !!!
  let selectedModalFilter = e.target.classList[1];

  // check if the clicked filter name is equals to the default filter(already selected filter) if true then go back !!!
  if (selectedModalFilter == selectedFilter) {
    return;
  }
  // set selected filter as the now choose filter !!!
  selectedFilter = selectedModalFilter;
  // remove active filter class
  document.querySelector(".active-filter").classList.remove("active-filter");
  // add active filter class on now selected filter 
  e.target.classList.add("active-filter");
}

function addTicket(e) {
  if (e.key == "Enter") {
    // get the content of the modal text box !!
    let modalText = e.target.textContent;
    // create a div and add class ticket to it
    let ticketDiv = document.createElement("div");
    ticketDiv.classList.add("ticket");
    // set the html of the ticket wala div !!
    ticketDiv.innerHTML = ` <div class="ticket-filter ${selectedFilter}"></div>
    <div class="ticket-id">#exampleId</div>
    <div class="ticket-content">${modalText}</div>`;

    // append the ticket on the UI !!!!
    ticketContainer.append(ticketDiv);

    // remove the modal from the ui !!!
    e.target.parentNode.remove();
    
    // again set by default filter as black !!!
    selectedFilter = "black";
  }
}

function clearModalTextBox(e) {
  if (e.target.getAttribute("data-typed") == "true") {
    return;
  }
  e.target.innerHTML = "";
  e.target.setAttribute("data-typed", "true");
}

// [ <div></div> ,<div></div> ,<div></div> ,<div></div>  ];
for (let i = 0; i < allFilters.length; i++) {
  allFilters[i].addEventListener("click", chooseFilter);
}

function chooseFilter(e) {
  let filter = e.target.classList[1];
  let filterCode = filterCodes[filter];
  ticketContainer.style.background = filterCode;
}
