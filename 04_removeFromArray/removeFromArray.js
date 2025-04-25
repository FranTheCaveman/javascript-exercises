const removeFromArray = function(array, ...itemsToRemove) {
    // filter out items in the array that match the itemsToRemove argument
    return array.filter(item => !itemsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
