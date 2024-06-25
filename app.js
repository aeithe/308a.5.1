import app2 from "./app2.js";
import app3 from "./app3.js";

const divBy5 = n1%5 && n2%5 && n3%5 && n4%5;
console.log(`The four numbers are valid according to the fact that they're all divisible by 5: ${n1%5 === 0 && n2%5 === 0 && n3%5 === 0 && n4%5 === 0}.`);
const gallonsTrip1 = hoursTrip1*scenario1
const gallonsTrip2 = hoursTrip2*scenario2
const gallonsTrip3 = hoursTrip3*scenario3

const costTrip1 = gallonsTrip1*3;
const costTrip2 = gallonsTrip2*3;
const costTrip3 = gallonsTrip3*3;

let trip1InBudget = costTrip1 <= fuelBudget
let trip2InBudget = costTrip2 <= fuelBudget
let trip3InBudget = costTrip3 <= fuelBudget

console.log(`For the first scenario, going 55 mPH, the entire trip will take you ${hoursTrip1} hours, ${gallonsTrip1} \
gallons, with a total cost of ${costTrip1} dollars - not exceeding the budget: ${trip1InBudget}.`);
console.log(`For the second scenario, going 60 mPH, the entire trip will take you ${hoursTrip2} hours, ${gallonsTrip2} \
gallons, with a total cost of ${costTrip2} dollars - not exceeding the budget: ${trip2InBudget}.`);
console.log(`For the third scenario, going 75 mPH, the entire trip will take you ${hoursTrip3} hours, ${gallonsTrip3} \
gallons, with a total cost of ${costTrip3} dollars - not exceeding the budget: ${trip3InBudget}.`);


  
