const PICTURE_IMG = '.picture__img';
const PICTURE_LIKES = '.picture__likes';
const PICTURE_COMMENTS = '.picture__comments';
/**
 *
 * @param {HTMLElement} container
 * @param {HTMLElement} element
 */
export const render = (container, element)=>{
  container.appendChild(element);
};

/**
 *
 * @param {HTMLElement} photoElement
 * @param {import('./data').Post} photo
 */
const initPhotoElement = (photoElement, photo)=>{
  const {comments,url,likes} = photo;
  photoElement.querySelector(PICTURE_IMG).src = url;
  photoElement.querySelector(PICTURE_LIKES).textContent = likes;
  photoElement.querySelector(PICTURE_COMMENTS).textContent = comments.length;
  return photoElement;
};

/**
 *
 * @param {HTMLElement} template
 * @param {Post[]} photos
 */
export const renderPhotoList = (template, photos)=>photos.map((item)=>initPhotoElement(template.cloneNode(true), item));

/**
 *
 * @param {HTMLElement[]} elements
 * @returns {DocumentFragment}
 */
export const wrapElements = (elements)=> {
  const fragment = document.createDocumentFragment();
  fragment.append(...elements);
  return fragment;
};
