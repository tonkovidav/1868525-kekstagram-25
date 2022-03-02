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

const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const url = [
  photos/'1'.jpg,
  photos/'2'.jpg,
  photos/'3'.jpg,
  photos/'4'.jpg,
  photos/'5'.jpg,
  photos/'6'.jpg,
  photos/'7'.jpg,
  photos/'8'.jpg,
  photos/'9'.jpg,
  photos/'10'.jpg,
  photos/'11'.jpg,
  photos/'12'.jpg,
  photos/'13'.jpg,
  photos/'14'.jpg,
  photos/'15'.jpg,
  photos/'16'.jpg,
  photos/'17'.jpg,
  photos/'18'.jpg,
  photos/'19'.jpg,
  photos/'20'.jpg,
  photos/'21'.jpg,
  photos/'22'.jpg,
  photos/'23'.jpg,
  photos/'24'.jpg,
  photos/'25'.jpg
];

const description = [
'Свадедное фото',
'Кот в сапогах',
'Путешествие на край света',
'Роджество',
'Встреча однокласников',
'Мой завтрак',
'Тренировка'
];

const commentsAvatars = [
'img/avatar-1.svg',
'img/avatar-2.svg',
'img/avatar-3.svg',
'img/avatar-4.svg',
'img/avatar-5.svg',
'img/avatar-6.svg'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

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

const getArrayElements = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const createComment = () => {
  return {
    id:getRandomPositiveInteger (1,282) ,
    avatar: getArrayElements (commentsAvatars),
    message: getArrayElements (messages),
    name: getArrayElements (profileNames)
  }

}

const createPost = () => {
  return {
    id: getRandomPositiveInteger (0,25),
    url: getArrayElements (url),
    description: getArrayElements (description),
    likes: getRandomPositiveInteger (15,200),
    comments: getArrayElements (comments)
  }
}
