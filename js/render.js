import {createPost} from './data.js';
const picturesList = document.querySelector('.pictures');
const userPhotos = createPost (25);
const template = document.querySelector('#picture').content.querySelector('.picture');
const photoFragment = document.createDocumentFragment ();
userPhotos.forEach(({url, likes, comments}) => {
  const photoElement = template.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = [comments];
});
picturesList.appendChild(photoFragment);
/**
 *
 * @param {HTMLElement} container
 * @param {HTMLElement} element
 */
export const render = (container, element)=>{
  container.appendChild(element);
};
