
'use strict';

import { quizData } from '../data.js';
import { getScoreElement, getSummaryElement, createQuitButton, prepareQuestionList, getHeaderElement, getBodyContainer } from '../views/finishView.js';
import { stopStopwatch } from './timeHandler.js';
import { getDOMElement,clearDOMElement } from '../utils/DOMUtils.js';
import { CURRENT_TIME_ID, RESULT_CONTAINER_ID, RESULT_HEADER } from '../constants.js';

export const quitQuiz = () => {
    quizData.currentQuestionIndex = 0;
    quizData.time = getDOMElement(CURRENT_TIME_ID).innerText;
    stopStopwatch();
    setupFinishHTML(); //to display results, adjust the HTML of the finish screen
    displayResults();
  };

 export const displayResults = () => {
    const container =  getDOMElement(RESULT_CONTAINER_ID);
    const headerElement = getDOMElement(RESULT_HEADER);

    const scoreElement = getScoreElement();
    headerElement.appendChild(scoreElement);
    
    const summaryElement = getSummaryElement();
    headerElement.appendChild(summaryElement);

    const bodyList =prepareQuestionList();
    container.appendChild(bodyList);
    const quitButton = createQuitButton();
    container.appendChild(quitButton); 
}; 
export const findScore=()=>{
    //find score of the user
     const numberOfCorrectAnswers=quizData.numberOfCorrectAnswers;
     return (numberOfCorrectAnswers!==0) ? Math.round(numberOfCorrectAnswers*100/quizData.questions.length) : 0
}
export const findNumberOfPassedQuestions=()=>
{   //to inform user, evaluate how many questions were not answered
    return quizData.questions.length-quizData.numberOfWrongAswers-quizData.numberOfCorrectAnswers;
}
 const setupFinishHTML = () => {
  //adjust the finish screen
  const container = getDOMElement('container');
  clearDOMElement(container);

  const headerElement = getHeaderElement();
  container.appendChild(headerElement);

  const bodyContainer = getBodyContainer();

  container.appendChild(bodyContainer);
}