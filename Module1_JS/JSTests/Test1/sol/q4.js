let obj = {
    newObj: {
      obj2: {
        obj5: {
          one: 1,
        },
      },
    },
    obj3: {
      obj4: { two: 2 },
    },
};

// { 'newObj.obj2.obj5.one': 1, 'obj3.obj4.two': 2 }

let flatObject = {};

function flattenObject(obj , flatObject , keyTillNow){
    for(key in obj){
        if( typeof obj[key] == "object"){
            keyTillNow = keyTillNow + key +"."
            flattenObject( obj[key] , flatObject , keyTillNow);
        }
        else{
            keyTillNow = keyTillNow + key;
            flatObject[keyTillNow] = obj[key];
        }
    }
}

flattenObject(obj , flatObject , "");
console.log(flatObject);
  