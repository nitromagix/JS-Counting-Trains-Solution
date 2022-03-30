// Step 1:
let newInventoryCarModels = ['S1', 'T1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]

//Step 2:
const length = newInventoryCarModels.length;
let i = 0

while(i < length){
    console.log(`${newInventoryCarModels[i]} is a ${newInventoryCarTypes[i]} and was built in ${newInventoryYearBuilt[i]}`)
    i++
}

// Step 3:
const S1 = "S1"
let j = 0
let modelS1Count = 0

while(j < length){
    if(newInventoryCarModels[j] === S1){
        modelS1Count++
    }
    j++
}

// Step 4:
console.log(`Number of ${S1} cars is: ${modelS1Count}`)


// Step 6, 7:
const LORRIE = "Lorrie"
let lorrieCount = 0
for(let i = 0; i < length; i++){
    if(newInventoryCarTypes[i] === LORRIE){
        lorrieCount++
    }
}

// Step 8:
console.log(`I have found ${lorrieCount} lorries.`)

// Bonus:
const currentYear = 2022
let totalAge = 0

for(let i = 0; i < length; i++){
   totalAge += (currentYear - newInventoryYearBuilt[i])
}

let averageAge = (totalAge / length)
console.log(`Average age is ${averageAge} years old`)