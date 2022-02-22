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
  const myMax = ensureMaxIsGreater(myMin, max);
  const scalar = myMax - myMin;
  return (scalar * Math.random()) + myMin;
}
window.console.log(getFromTo (1,100));

function validateStringLength (checkString, maxStringLength) {
  if(typeof checkString !== 'string'){
    throw new Error(`неверный тип аргумента checkString. хочу строку, получила: ${typeof checkString}: ${checkString}`);
  }
  if(typeof maxStringLength !== 'number' || maxStringLength<0){
    throw new Error(`неверный аргумент maxStringLength. хочу положительное число, получила: ${typeof maxStringLength}: ${maxStringLength}`);
  }
  return checkString.length <= maxStringLength;
}
window.console.log(validateStringLength('хорошая строка', 1000));
window.console.log(validateStringLength('плохая строка', 5));
