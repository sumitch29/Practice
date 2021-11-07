///////////////////////////////////////////////////////////////////////// coding challenge 1 & 2

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

///////////////////////////////////////////////////////////////////////////////// coding challeng 3

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

//////////////////////////////////////////////////////////////////////////////// coding challenge 4

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
    
// const billAmount = 275;
// const tip= billAmount<=300 && billAmount>=50 ? billAmount*0.15 : billAmount*0.20;
// console.log(`billamount is ${billAmount} and tip given will be ${tip} and total value ${billAmount + tip}`);

///////////////////////////////////////////////////////////////////////// section 3
// function calling function.

// const cutPieces= function(fruit){
//     return fruit*4;
// }

// function fruitProcess(apples, oranges){
//     const applePieces=cutPieces(apples);
//     const orangePieces=cutPieces(oranges)
//     const juice = `juice with ${applePieces} apple and ${orangePieces} orange`;
//     return juice;
// }

// console.log(fruitProcess(5,2))

///////////////////////////////////////////////////////////////////// section 3 coading challenge 1

// function calcAverage(matchOne, matchTwo, matchThree){
//     const average=(matchOne + matchTwo + matchThree)/3 ;
//     return average;
// }

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas){
//     if(avgDolphins>=2*avgKoalas){
//         console.log('Dolphins wins the match')
//     }else if (avgKoalas>=2*avgDolphins){
//         console.log('koalas wins the match')
//     }else{
//         console.log('Better luck next time no one wins')
//     }
// }

// checkWinner(avgDolphins, avgKoalas);

/////////////////////////////////////////////////////section 3//////coding challenge 2


// const billAmount= 300;
// let tip;
// if(billAmount<=300 && billAmount>=50){
//     tip = billAmount*0.15;
// console.log(`billamount is ${billAmount} and tip given will be ${tip}`);
// }else{
//     tip = billAmount*0.20;
//     console.log(`billamount is ${billAmount} and tip given will be ${tip}`);
// }
//                 or
    
// const billAmount = 275;
// const tip= billAmount<=300 && billAmount>=50 ? billAmount*0.15 : billAmount*0.20;
// console.log(`billamount is ${billAmount} and tip given will be ${tip} and total value ${billAmount + tip}`);

// const calcTip = function (bill){
//     return bill<=300 && bill>=50 ? bill * 0.15 : bill * 0.20;
// }

// const bills = [255,555,40];
// const tips =[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips)
// const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2],];
// console.log(bills, tips, totals)

/////////////////////////section 3---coding challenge 3////////////////

const markMiller = {
    fullName: 'markmiller',
    mass : '78',
    height : '1.69',

   calcBmi: function(){
   this.bmi = this.mass / (this.height * this.height);
   return this.bmi;
   }

};

const johnSmith = {
    fullName: 'johnsmith',
    mass : '92',
    height : '1.95',

    
   calcBmi: function(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
    }
}

markMiller.calcBmi();
johnSmith.calcBmi();
console.log(markMiller.bmi, johnSmith.bmi);

if(markMiller.bmi > johnSmith.bmi){
    console.log(`Bmi of markMiller is  ${markMiller.bmi} and johnSmith is ${johnSmith.bmi}`)
}else if(johnSmith.bmi > markMiller.bmi){
    console.log(`Bmi of markMiller is  ${markMiller.bmi} and johnSmith is ${johnSmith.bmi}`)
}