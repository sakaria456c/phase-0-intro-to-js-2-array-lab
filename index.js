const cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
    return cats.push("Ralph")
}
function destructivelyPrependCat(){
    return cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    return cats.pop()
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}
function appendCat(newcats){
    return newcats=[...cats,"Broom"]
}
function prependCat(newcats){
    return newcats=["Arnold",...cats]
}
function removeLastCat(newcats){
    return newcats=cats.slice(0, cats.length - 1)
}
function removeFirstCat(newcats){
    return newcats=cats.slice(1)
}