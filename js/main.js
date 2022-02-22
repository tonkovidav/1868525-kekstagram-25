// function getFromTo(min, max) {
//   let myMin;
//   let myMax;

//   if (min < 0) {
//     myMin = 0;
//   } else {
//     myMin = min;
//   }

//   if (max < 0 || max < min) {
//     myMax = 10;
//   } else {
//     myMax = max;
//   }

//   let rndNum = Math.random(0, 100);

//   while(rndNum < min || rndNum > max) {
//     if (rndNum >= myMin && rndNum <= myMax) {
//       return rndNum;
//       break;
//     } else {
//       rndNum = Math.random(0, 100);
//     }
//   }
// }

const getFromTo(min, max) {
  let myMin;
  let myMax;

  if (min < 0) {
    myMin = 0;
  } else {
    myMin = min;
  }

  if (max < 0 || max < min) {
    myMax = 10;
  } else {
    myMax = max;
  }

  return Math.random(myMin, myMax);
}

const getStringLength(checkString, maxStringLength) {
  if (checkString.length <= maxStringLength) {
    return true;
  }
  else {
    return false;
  }
}
