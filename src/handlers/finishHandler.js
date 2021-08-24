
'use strict';

import { quizData } from '../data.js';
import { setupFinishHTML, displayResults } from '../views/finishView.js';
import { stopStopwatch } from './timeHandler.js';
import { getDOMElement } from '../utils/DOMUtils.js';
import { CURRENT_TIME_ID } from '../constants.js';

export const quitQuiz = () => {
    quizData.currentQuestionIndex = 0;
    quizData.time = getDOMElement(CURRENT_TIME_ID).innerText;
    stopStopwatch();
    setupFinishHTML(); //to display results, adjust the HTML of the finish screen
    displayResults();
  };

  
export const findScore=()=>{
    //find score of the user
     let numberOfCorrectAnswers=quizData.numberOfCorrectAnswers;
     return (numberOfCorrectAnswers!==0) ? Math.round(numberOfCorrectAnswers*100/quizData.questions.length) : 0
}
export const findNumberOfPassedQuestions=()=>
{   //to inform user, evaluate how many questions were not answered
    return quizData.questions.length-quizData.numberOfWrongAswers-quizData.numberOfCorrectAnswers;
}