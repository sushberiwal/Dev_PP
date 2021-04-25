function solveFormula(formula, selfCellObject) {
  // "( A1 + A2 )" => "( 10 + 20 )"
  let formulaComps = formula.split(" ");
  // ["(" , "A1" , "+" , "A2" , ")"];

  //this loop replace value of A1 and A2 in formula with their respective cell values !!
  for (let i = 0; i < formulaComps.length; i++) {
    let formComp = formulaComps[i];
    if (formComp[0] >= "A" && formComp[0] <= "Z") {
      // valid formula component
      // A1 => Z100
      let { rowId, colId } = getRowIdColIdFromAddress(formComp);
      let cellObject = db[rowId][colId];
      let value = cellObject.value;
      
      if (selfCellObject) {
        // push yourself in the childrens of formula Components cellObject
        cellObject.childrens.push(selfCellObject.name);
        selfCellObject.parents.push(cellObject.name);
      }

      formula = formula.replace(formComp, value);
    }
  }

  // Stack Infix Evaluation !!! => "( 10 + 20 )";
  let computedValue = eval(formula);
  return computedValue;
}

function updateChildrens(cellObject) {
  // {
  //     name:"A1",
  //     value:"100",
  //     formula:"",
  //     childrens:["B1",  "C1"]
  // }
  for (let i = 0; i < cellObject.childrens.length; i++) {
    let childrenName = cellObject.childrens[i];
    let { rowId, colId } = getRowIdColIdFromAddress(childrenName);
    let childrenCellObject = db[rowId][colId];
    // {
    //     name:"B1",
    //     value:"30",
    //     formula:"( A1 + A2 )",
    //     childrens:[]
    // }
    let newValue = solveFormula(childrenCellObject.formula);
    
    // ui update
    document.querySelector(`div[rowid='${rowId}'][colid='${colId}']`).textContent = newValue;
    // db update
    childrenCellObject.value = newValue;
    updateChildrens(childrenCellObject);
  }
}

function removeFormula(cellObject){
  cellObject.formula = "";
  for(let i=0 ; i<cellObject.parents.length ; i++){
    let parentName = cellObject.parents[i];
    let {rowId , colId} = getRowIdColIdFromAddress(parentName);
    let parentCellObject = db[rowId][colId];

    let updatedChildrens = parentCellObject.childrens.filter(function(children){
      return children != cellObject.name;
    })

    parentCellObject.childrens = updatedChildrens;
  }
  cellObject.parents = [];
}

function getRowIdColIdFromElement(element) {
  let rowId = element.getAttribute("rowid");
  let colId = element.getAttribute("colid");
  return {
    rowId,
    colId,
  };
}

function getRowIdColIdFromAddress(address) {
  // B2 => colid,rowId
  // B => 1
  let rowId = Number(address.substring(1)) - 1;
  let colId = address.charCodeAt(0) - 65;
  return {
    rowId,
    colId,
  };
}
