import {createPost} from './data.js';
import { render, renderPhotoList, wrapElements } from './render.js';
const IMAGE_TEMPLATE_ID = '#picture';
const IMAGE_ITEM_SELECTOR = '.picture';
const IMAGES_CONTAINER_SELECTOR ='.pictures';
/**
 *
 * @returns {HTMLElement}
 */
const getImageElementFromTemplate = ()=>{
  /**
   * @type {HTMLTemplateElement}
   */
  const template = document.querySelector(IMAGE_TEMPLATE_ID);
  if(!template){
    throw new Error('Template not found');
  }
  /**
   * @type {HTMLAnchorElement}
   */
  const element = template.content.querySelector(IMAGE_ITEM_SELECTOR);
  if(!element){
    throw new Error('Element not found');
  }
  return element.cloneNode(true);
};

/**
 *
 * @returns {HTMLElement}
 */
const getPictureListContainer = () => {
  const element = document.querySelector(IMAGES_CONTAINER_SELECTOR);
  if(!element){
    throw new Error('not found');
  }
  return element;
};

const posts = Array.from({length:10}, createPost);

render(
  getPictureListContainer(),
  wrapElements(
    renderPhotoList(
      getImageElementFromTemplate(),
      posts),
  ),
);
