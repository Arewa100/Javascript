let numberCounter = (listOfElements)=>{
    let elementCountObject = {};
    for(element of listOfElements) {
        let elementCount = 0;
        listOfElements.forEach((theElement)=> {
            element == theElement ? elementCount = elementCount + 1 : elementCount = elementCount
        })
        elementCountObject[element] = elementCount;
    }
    return elementCountObject;
}


let testScores = (listOfScores)=> {
    let highestScores = listOfScores.filter((score)=> score >= 70)
    return highestScores
}

let scoreIncrementer = (listOfScore)=> {
    let newScores = listOfScore.map((score)=> score + 5)
    return newScores
}
let squareOfScores = (listOfScore)=> {
    let newScores = listOfScore.map((score)=> score * score)
    return newScores
}


let bookDistributor = (listOfMembers)=> {
    let collectionOfMembers = {};
    let arrayOfBooks = ["Obi goes to school", "The burning Grass", "The Tempest", "Half of a Yellow sun"]
    for(member of listOfMembers) {
        collectionOfMembers[member] = null
    }
    for(key in collectionOfMembers) {
        
    }

    return collectionOfMembers
}

let timeIdentifer = (listOfTime)=> {
    let result = []
    let classesOfferedIntheAfternnon = listOfTime.filter((eachTime)=> {
        for(let index = 0; index < eachTime.length; index++) {
            if(eachTime[index] == "P") {
                result.push(eachTime)
            }
        }
    })
    return result;
}

let expensesCalculator = (trackOfExpenses)=> {
    let sumOfExpenses = 0
    for(key in trackOfExpenses) {
        sumOfExpenses = sumOfExpenses + trackOfExpenses[key]
    }
    return sumOfExpenses
}
module.exports = {numberCounter, testScores, scoreIncrementer, squareOfScores, bookDistributor, timeIdentifer, expensesCalculator}
 