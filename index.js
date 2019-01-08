// Code your solution in this file
function findMatching(drivers, argument){
  return drivers.filter(x => x.toLowerCase().includes(argument.toLowerCase()))
}

function fuzzyMatch(drivers, fuz){
  return drivers.filter(x => x.slice(0,2).toLowerCase() === fuz.toLowerCase())
}

function matchName(drivers, name){
  return drivers.filter(x => x.name.toLowerCase().includes(name.toLowerCase()))
}
