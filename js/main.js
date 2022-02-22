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

function getPositiveValue (min){
  return min<0?0:min;
}

function getFromTo (min, max) {
  let myMin;
  let myMax;

  // правильно, что ты не доверяешь полученным параметрам, а проверяешь их.
  // однако, лучше оператор if-else выковырять в отдельную функцию
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

getFromTo (1,100);

function getStringLength (checkString, maxStringLength) {
  if (checkString.length <= maxStringLength) {
    return true;
  }
  else {
    return false;
  }
}
getStringLength ();
