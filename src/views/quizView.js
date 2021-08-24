'use strict';
import { QUESTION_CONTAINER_ID, CONTROL_CONTAINER_ID,  CONTROL_CLASS, QUIZ_CONTAINER_ID} from "../constants.js";
import { getDOMElement, createDOMElement, clearDOMElement } from "../utils/DOMUtils.js";
import { getHeader, updateDisplay } from "./headerViews.js";
import { createNextQuestionButtonElement } from "./questionViews.js";
import { startStopwatch } from "../handlers/timeHandler.js";


export const setupQuizHTML = () => {

    const container = getDOMElement('container');
    clearDOMElement(container);
    
    const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
    const questionContainer = createDOMElement('div', {
      id: QUESTION_CONTAINER_ID,
    });
    const controlContainer = createDOMElement('div', {
      id: CONTROL_CONTAINER_ID, class: CONTROL_CLASS
    });
    //to inform user about the current situation, create header container
    const headerContainer = getHeader();
     
    quizContainer.appendChild(headerContainer);
    startStopwatch();
    //it contains questions and choices
    quizContainer.appendChild(questionContainer);
    
    //to get and display next question, create next button
    const nextQuestionButton = createNextQuestionButtonElement();
    controlContainer.appendChild(nextQuestionButton);
  
    quizContainer.appendChild(controlContainer);
 
    container.appendChild(quizContainer);
    //display current status information, when the quiz starts 
    updateDisplay();
  };