// coding challenge 1 & 2

// let markHeight = 1.69;
// let markMass = 78;
// let johnHeight = 1.76;
// let johnMass = 92;

// let bmiMark = markMass / markHeight ** 2 ;
// console.log(bmiMark);

// let bmiJohn = johnMass / markHeight ** 2 ;
// console.log(bmiJohn);

// if (bmiMark > bmiJohn){
//     console.log("nice, mark bmi is greater than john bmi")
// }else{
//     console.log("nice, john bmi is greater than mark's bmi")
// }

// console.log(`bmi of mark is ${bmiMark} and bmi of john is ${bmiJohn}`);

// coding challeng 3

// const dolPhinsOne = 96;
// const dolPhinsTwo = 108;
// const dolPhinsThree = 89;

// const koalasOne = 88;
// const koalasTwo = 91;
// const koalasThree = 110;

// const avgDolphins = (dolPhinsOne + dolPhinsTwo + dolPhinsThree)/3 ;
// const avgKoalas = (koalasOne + koalasTwo + koalasThree)/3 ;

// if(avgDolphins > avgKoalas){
//     console.log("average score of dolphins is more so dolphin won the match")
// }else if (avgDolphins === avgKoalas){
//     console.log("match draw")
// }else{
//     console.log("average score of koalas is more so koalas won the match")
// }

// // bonus 1

// const dolPhinsOne = 98;
// const dolPhinsTwo = 110;
// const dolPhinsThree = 100;

// const koalasOne = 98;
// const koalasTwo = 100;
// const koalasThree = 110;

// const avgDolphins = (dolPhinsOne + dolPhinsTwo + dolPhinsThree)/3 ;
// const avgKoalas = (koalasOne + koalasTwo + koalasThree)/3 ;
// console.log(avgKoalas, avgDolphins);


// if(avgDolphins > avgKoalas && avgDolphins >=100){
//     console.log("average score of dolphins is more so dolphin won the match")
// }else if(avgKoalas > avgDolphins && avgKoalas >=100){
//     console.log("average score of koalas is greater so koalas won the match")
// }else if (avgDolphins === avgKoalas && avgDolphins>=100 && avgKoalas>=100){
//     console.log("match draw")
// }else{
//     console.log("No One won the match")
// }

//switch statement

// const day = 'wednesday';
// switch (day) {
//     case 'monday':
//         console.log('today is a good day')
//     break;
//     case 'tuesday':
//         console.log('today you have to go work')
//     break;
//     case 'wednesday':
//         console.log('today you have to got to gym')
//     break;
//     default:
//         console.log('please enter valid day')    
// }

// coding challenge 4

// const billAmount= 300;
// let tip;
// if(billAmount<=300 && billAmount>=50){
//     tip = billAmount*0.15;
// console.log(`billamount is ${billAmount} and tip given will be ${tip}`);
// }else{
//     tip = billAmount*0.20;
//     console.log(`billamount is ${billAmount} and tip given will be ${tip}`);
// }
                // or
    
// const billAmount = 400;
// const tip= billAmount<=300 && billAmount>=50 ? billAmount*0.15 : billAmount*0.20;
// console.log(`billamount is ${billAmount} and tip given will be ${tip}`);