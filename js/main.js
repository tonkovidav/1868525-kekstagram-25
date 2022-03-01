function getPositiveValue (min) {
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

function checkStringLength (string, length) {
  return string.length <= length;
}
window.console.log (checkStringLength (110, 150));
