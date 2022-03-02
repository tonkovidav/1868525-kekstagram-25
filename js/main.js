/*function getPositiveValue (min) {
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
*/
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
getRandomPositiveInteger (0,25);

function checkStringLength (string, length) {
  return string.length <= length;
}
window.console.log (checkStringLength (110, 150));

// module4-task1

const urls = Array.from({length: 25}, (_,ix)=>`photos/${1+ix}.jpg`);

const description = [
  'Свадедное фото',
  'Кот в сапогах',
  'Путешествие на край света',
  'Роджество',
  'Встреча однокласников',
  'Мой завтрак',
  'Тренировка'
];

const commentsAvatars = Array.from({length:6}, (_,ix)=>`img/avatar-${1+ix}.svg`);
;

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const profileNames = [
  'Иван',
  'Артём',
  'Александр',
  'Мария',
  'Екатерина',
  'Станислав',
  'Светлана',
  'Юлия'
];

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const createComment = () => ({
  id: getRandomPositiveInteger (1,282),
  avatar: getRandomArrayElement (commentsAvatars),
  message: getRandomArrayElement (messages),
  name: getRandomArrayElement (messages),
});

const createPost = () => ({
  id: getRandomPositiveInteger (0, 25),
  url: getRandomArrayElement (urls),
  description: getRandomArrayElement (description),
  likes: getRandomPositiveInteger (15,200),
  comments: createComment ()
});

createPost ();
