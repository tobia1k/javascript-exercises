const removeFromArray = function(arr, ...remove) {
    let size = remove.length;
    for (let i = 0; i < size; i++) {
        // index = index of arr where the value = remove[i]
        for (let j = 0; j < arr.length; j++) {
            let index = arr.indexOf(remove[i]);
            if (index !== -1) {
                arr.splice(index, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
