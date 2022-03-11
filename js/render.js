const picturesList = document.querySelector('.pictures');
const photoFragment = document.createDocumentFragment ();

picturesList.appendChild(photoFragment);
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
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
};

/**
 *
 * @param {HTMLElement} template
 * @param {Post[]} photos
 */
export const renderPhotoList = (template, photos)=>photos.map((item)=>initPhotoElement(template.cloneNode(true), item));
