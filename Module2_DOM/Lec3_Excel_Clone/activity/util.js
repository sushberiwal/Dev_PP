function solveFormula(formula){
    // "( A1 + A2 )" => "( 10 + 20 )"
    let formulaComps = formula.split(" ");
    // ["(" , "A1" , "+" , "A2" , ")"];

    //this loop replace value of A1 and A2 in formula with their respective cell values !!
    for(let i=0;i<formulaComps.length ; i++){
        let formComp = formulaComps[i];
        if(formComp[0] >= "A" && formComp[0] <= "Z"){
            // valid formula component
            // A1 => Z100
            let {rowId , colId} = getRowIdColIdFromAddress(formComp);   
            let cellObject = db[rowId][colId];
            let value = cellObject.value;
            formula = formula.replace(formComp , value);
        }
    }

    // Stack Infix Evaluation !!! => "( 10 + 20 )";
    let computedValue = eval(formula);
    return computedValue;
}

function getRowIdColIdFromElement(element){
    let rowId = element.getAttribute("rowid");
    let colId = element.getAttribute("colid");
    return {
        rowId , colId
    }
}

function getRowIdColIdFromAddress(address){
    // B22 => colid,rowId
    // B => 1
    let rowId = Number(address.substring(1)) - 1;
    let colId = address.charCodeAt(0) - 65;
    return {
        rowId , colId
    }
}