let names = ["penny" , "sheldon" , "leonard" , "howard" , "rajesh"];


let comps = names.map( function(name){
    return `<h1>${name}</h1>`
})

console.log(comps);