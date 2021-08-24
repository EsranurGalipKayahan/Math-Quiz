'use strict';

import { BTN_CLASS } from "../constants.js";

/**
 * This function removes all the html inside the given element
 */
export const clearDOMElement = (DOMElement) => {
  DOMElement.innerHTML = '';
};

/**
 * This function creates a DOM element with the given tag.
 * In the options parameter it is possible to add some extra data to it:
 *
 *  id - the id of the element
 */

export const createDOMElement = (tag, options) => {

  const attributes = options;
  const element = document.createElement(tag);
  //if element is wanted to create with attributes
  if (attributes!=null) {

    for(let key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}
  return element;
};

/**
 * Find and return a DOM element by its id
 */
export const getDOMElement = (id) => {
  return document.getElementById(id);
};
export function setStatusClass(element, correct) {
  
  if (correct) {
    //if the correct answer is in this choice, change color to correct color
    element.classList.add('correct')
    
  } else {  //if the wrong answer is in this choice, change color to wrong color
    element.classList.add('wrong')
   
  }
}
export function addClassToElement(element,className){
  //add new class to the HTML element
    element.classList.add(className);
}