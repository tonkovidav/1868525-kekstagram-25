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

function ensureMaxIsGreater(myMin, max){
  if (max < myMin) {
    throw new Error(`неправильные аргументы. договорились, что min>0 и max> min, а получили ${max}`);
  }
  return max;
}

function getFromTo (min, max) {
  const myMin = getPositiveValue(min);


  // правильно, что ты не доверяешь полученным параметрам, а проверяешь их.
  // однако, лучше оператор if-else выковырять в отдельную функцию
  // тогда можно myMin иметь const, это рекомендация.

  // теперь яснее видно, что надо сравнивать не с min, а проверенным значением myMin
  // дополнительно, мы сможем вынести это правило в отдельную
  // хотя сначала обратим внимание, что myMin, в общем-то может быть больше 10, (11, например).
  // Если это так, то у нас нет возможности правильно обслужить запрос.
  // в таком виде мы можем унести правило в отдельную функцию
  // а переменную myMax сделать неизменяемой
  const myMax = ensureMaxIsGreater(myMin, max);

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
