let markHeight = 1.69;
let markMass = 78;
let johnHeight = 1.76;
let johnMass = 92;

let bmiMark = markMass / markHeight ** 2 ;
console.log(bmiMark);

let bmiJohn = johnMass / markHeight ** 2 ;
console.log(bmiJohn);

if (bmiMark > bmiJohn){
    console.log("nice, mark bmi is greater than john bmi")
}else{
    console.log("nice, john bmi is greater than mark's bmi")
}

console.log(`bmi of mark is ${bmiMark} and bmi of john is ${bmiJohn}`);

