import {createPost} from './data.js';
const IMAGE_TEMPLATE_ID = '#picture';
const IMAGE_ITEM_SELECTOR = '.picture';
const getImageElementFromTemplate = ()=>{
  const template = document.querySelector(IMAGE_TEMPLATE_ID).content.querySelector(IMAGE_ITEM_SELECTOR);
  if(!template){
    throw new Error('Template not found');
  }
  return template;
};
createPost ();
