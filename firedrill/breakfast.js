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



const numberIncrementer = (arrayOfNumbers)=> {
    let numberString = "";
    arrayOfNumbers.forEach((number)=>{
        numberString = numberString + String(number);
    })
    let number= Number(numberString) + 1;
    let newStringedNumber = String(number);
    let arrayOfString = [];
    for(let character of newStringedNumber) {
        arrayOfString.push(Number(character))
    }

    return arrayOfString;
}


let largestNumbers = (arrayOfNumbers)=> {
    let theHigestNumbers = [];
    let max = 0;
    let count = 1;


    while(count <= 2) {
        max = 0;
        for(index in arrayOfNumbers) {  
            if(max < arrayOfNumbers[index]) {
                max = arrayOfNumbers[index];

            }

        }
        
        for(index in arrayOfNumbers) {
            if(max == arrayOfNumbers[index]) {
                arrayOfNumbers[index] = 0;
             }
        }

        theHigestNumbers.push(max);
        count = count + 1;
    }

    return theHigestNumbers;
}




module.exports = {arrayManipulator, numberIncrementer, largestNumbers};