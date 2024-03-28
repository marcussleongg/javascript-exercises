const removeFromArray = function(array, ...elementsToRemove) {
    let filteredArr = array;
    for (element of elementsToRemove) {
        filteredArr = filteredArr.filter(a => a !== element);
    }
    return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
