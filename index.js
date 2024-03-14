const returnFirstTwoDrivers = function(scubersDrivers) {
return scubersDrivers.slice(0,2);
}
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));


const returnLastTwoDrivers = function(scubersDrivers) {
    return scubersDrivers.slice(-2);
    }
  
 console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));


 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 function createFareMultiplier(value) {
  return function FareMultiplier(multiplierNum) {
       return  value * multiplierNum; 
    }
 }
 console.log(createFareMultiplier(2)(9));

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(5));

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(3));

function selectDifferentDrivers(scubersDrivers, differentDrivers) {
if (differentDrivers === returnFirstTwoDrivers) {
   return returnFirstTwoDrivers(scubersDrivers); 
}
else if (differentDrivers === returnLastTwoDrivers) {
   return returnLastTwoDrivers(scubersDrivers);
}
}
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers));