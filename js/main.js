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

  // проблема в том, что Math.random не использует никаких аргументов
  // JavaScript такая хитрая штука, что позволяет позвать функцию с лишним
  // количеством аргументов.
  // чтобы сделать случайное число в интервале нужно "отмасштабировать" случайное число и подвинуть его.
  const scalar = myMax - myMin;
  return (scalar * Math.random()) + myMin;
}

window.console.log(getFromTo (1,100));

// правильно называть функцию сложно для всех нас.
// по правде придумать название - это главная головная боль разработчика
// но эта функция больше похожа на "контроль по длине"
function validateStringLength (checkString, maxStringLength) {
  // тот кто вызывает функцию, может забыть передать параметр, как это выглядит сейчас
  // нельзя доверять - надо проверять
  if(typeof checkString !== 'string'){
    throw new Error(`неверный тип аргумента checkString. хочу строку, получила: ${typeof checkString}: ${checkString}`);
  }
  if(typeof maxStringLength !== 'number' || maxStringLength<0){
    throw new Error(`неверный аргумент maxStringLength. хочу положительное число, получила: ${typeof maxStringLength}: ${maxStringLength}`);
  }
  // академия рекомендует такие выражения не делать, а заменять их на тернарный оператор
  // а теперь яснее видно, что нужно вернуть прямо результат сравнения
  return checkString.length <= maxStringLength;
}
window.console.log(validateStringLength('хорошая строка', 1000));
window.console.log(validateStringLength('плохая строка', 5));

validateStringLength ();
