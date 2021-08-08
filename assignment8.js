console.log("Part A - Tip Calculator");
const bills1 = [275, 28, 430];

for (let i = 0; i < 3; i++) {
    let tip15 = bills1[i] * 0.15;
    let tip20 = bills1[i] * 0.20;
    bills1[i] > 300 && bills1[i] < 30
    ? console.log(`If the bill is $${bills1[i]}, the tip would be $${tip20}, and the total value is $${bills1[i] + tip20}.`) 
    : console.log(`If the bill is $${bills1[i]}, the tip would be $${tip15}, and the total value is $${bills1[i] + tip15}.`);
}


// B.

console.log("\nPart B");

function celsiusToFahrenheit() {
    let celsius = 30;
    let fahrenheit = (celsius * (9/5)) + 32;
    console.log(`${celsius}°C is ${fahrenheit}°F`);
}
celsiusToFahrenheit(30);

function fahrenheitToCelsius() {
    fahrenheit = 86;
    celsius = (fahrenheit - 32) * (5/9);
    console.log(`${fahrenheit}°F is ${celsius}°C`);
}
fahrenheitToCelsius(86);


// C.

console.log("\nPart C");

netsdata1 = [44, 23, 71];
knicksdata1 = [65, 54, 49];

netsdata2 = [85, 54, 41];
knicksdata2 = [23, 34, 27];

const calcAverage = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i]; 
    }
    return total/array.length;
}

let avgNets1 = calcAverage(netsdata1);
let avgNets2 = calcAverage(netsdata2);

let avgKnicks1 = calcAverage(knicksdata1);
let avgKnicks2 = calcAverage(knicksdata2);

const checkWinner = (Knicks, Nets) => {
    if (Knicks > 2 * Nets) {
        return `the Knicks win (${Knicks} vs ${Nets})`;
    }
    else if (Nets > 2 * Knicks){
        return `the Nets win (${Nets} vs ${Knicks})`;
    }
    else {
        return `no team wins`;
    }
}

console.log(`For test data 1, ${checkWinner(avgKnicks1, avgNets1)}.`);

console.log(`For test data 2, ${checkWinner(avgKnicks2, avgNets2)}!`);


// D

console.log("\nPart D");

const calcTip = (bill) => {
    if(bill >=50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

let bills = [125, 555, 44];

const calcBills = (bills) => {
    let tipsList = [];
    tipsList.push(calcTip(bills[0]));
    tipsList.push(calcTip(bills[1]));
    tipsList.push(calcTip(bills[2]));
    console.log("tips: " + tipsList);

    let totalBillList = [];
    totalBillList.push(tipsList[0] + bills[0]);
    totalBillList.push(tipsList[1] + bills[1]);
    totalBillList.push(tipsList[2] + bills[2]);
    return totalBillList;
}

console.log("total bills: ", calcBills(bills));
