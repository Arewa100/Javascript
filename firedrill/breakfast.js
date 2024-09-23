function arrayManipulator(arrayInput) {
    new_array = []
    let count = 0
        while(count < arrayInput.length) {
            let summedValue = arrayInput[count] + arrayInput[count + 1];
            new_array.push(summedValue);
            count = count + 2;
        }
    return new_array
}

console.log(arrayManipulator([2,3, 4, 5, 6, 7]));

module.exports = {arrayManipulator};