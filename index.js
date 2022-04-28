// Code your solution here

function findMatching(driverNames, filteredName) {
    return driverNames.filter((matchedName) => matchedName.toLowerCase() === filteredName.toLowerCase());
}
  
function fuzzyMatch(driverNames, inputString) {
    return driverNames.filter((matchedName) => matchedName.toLowerCase().indexOf(inputString.toLowerCase()) === 0 );
}
  
function matchName(driverObjArray, inputName) {
    return driverObjArray.filter((obj) => obj.name === inputName);
}