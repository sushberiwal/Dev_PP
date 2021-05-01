let addSheetBtn = document.querySelector(".add-sheet");
let sheetsList = document.querySelector(".sheets-list");
let sheetId = 0;

addSheetBtn.addEventListener("click", function (e) {
  sheetId++;
  // it will remove activesheet class from current active sheet
  document.querySelector(".active-sheet").classList.remove("active-sheet");

  let sheetDiv = document.createElement("div");
  sheetDiv.classList.add("sheet");
  sheetDiv.classList.add("active-sheet");
  sheetDiv.setAttribute("sheetid", sheetId);
  sheetDiv.innerHTML = `Sheet ${sheetId + 1}`;

  // <div class="sheet" sheetid="1">Sheet 2</div>
  sheetsList.append(sheetDiv);

  //UI should be new
  initUI();

  // new sheet db 
  // sheetsdb.push(new sheet db)
  // db = new sheet db
  initDB();
});

sheetsList.addEventListener("click", function (e) {
  let selectedSheet = e.target;
  // active-sheet
  if (selectedSheet.classList.contains("active-sheet")) {
    return;
  }
  // non active-sheet
  // it will remove activesheet class from current active sheet
  document.querySelector(".active-sheet").classList.remove("active-sheet");
  selectedSheet.classList.add("active-sheet");

  initUI();

  //set current db to active sheet db;
  let sheetId = selectedSheet.getAttribute("sheetid");
  
  // set db and visited cells
  db = sheetsDB[sheetId].db;
  visitedCells = sheetsDB[sheetId].visitedCells;

  // set UI according to that db
  setUI();
});

function setUI(){
    // for(let i=0 ; i<100 ; i++){
    //     for(let j=0 ; j<26 ; j++){
    //         let cellObject = db[i][j];
    //         document.querySelector(`div[rowid="${i}"][colid="${j}"]`).textContent = cellObject.value; 
    //     }
    // }
    for(let i=0 ; i<visitedCells.length ; i++){
      let {rowId , colId} = visitedCells[i];
      let cellObject = db[rowId][colId];
      document.querySelector(`div[rowid="${rowId}"][colid="${colId}"]`).innerHTML = cellObject.value;
    }
}

function initUI(){
    // for(let i=0 ; i<100 ; i++){
    //     for(let j=0 ; j<26 ; j++){
    //         document.querySelector(`div[rowid="${i}"][colid="${j}"]`).innerHTML = "";
    //     }
    // }
    for(let i=0 ; i<visitedCells.length ; i++){
      let {rowId , colId} = visitedCells[i];
      document.querySelector(`div[rowid="${rowId}"][colid="${colId}"]`).innerHTML = "";
    }
}