'use strict';

import { CONTROL_CONTAINER_ID, QUESTION_CONTAINER_ID} from '../constants.js';
import { createFinishButtonElement, createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement,getDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';
import { updateCurrentLevel } from '../views/headerViews.js';

export const showCurrentQuestion = () => {

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  //get the prepared element for the current question
  const questionDOM = createQuestionElement(currentQuestion);

  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  //clear the previous question
  clearDOMElement(questionContainer);

  questionContainer.appendChild(questionDOM);
};
export const  showLastQuestion = () => {
     //if the user comes to the last question, instead of next button, create a finish button
     const finishButton = createFinishButtonElement();

     const controlContainer = getDOMElement(CONTROL_CONTAINER_ID);
     //clear next button
     clearDOMElement(controlContainer);
     //add finish button
     controlContainer.appendChild(finishButton);
};

export const handleNextQuestion = () => {
    //if the user does not come to the last question
  if(quizData.currentQuestionIndex<quizData.questions.length-2)
    {    //to get next question, set the indicator
        quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
        showCurrentQuestion();
    }//if the user comes to the next question
  else if(quizData.currentQuestionIndex===quizData.questions.length-2){
       quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
       showLastQuestion();
       showCurrentQuestion();
  }
  //to inform user instantly about which question he is reading, update the screen
  updateCurrentLevel();
};
