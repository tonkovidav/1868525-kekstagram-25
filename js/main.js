import {createPost} from './data.js';
const IMAGE_TEMPLATE_ID = '#picture';
const IMAGE_ITEM_SELECTOR = '.picture';
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
createPost ();
