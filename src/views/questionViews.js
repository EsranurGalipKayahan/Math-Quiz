'use strict';

import { NEXT_QUESTION_BUTTON_ID, FINISH_QUIZ_BUTTON_ID, ANSWERS_CONTAINER_ID, BTN_CLASS, BTN_GRID_CLASS, CONTROL_BTN_CLASS} from '../constants.js';
import { nextQuestion } from '../listeners/questionListeners.js';
import { selectedAnswer } from '../listeners/answersListener.js';
import { finishQuiz } from '../listeners/finishListeners.js';
import { addClassToElement, createDOMElement } from '../utils/DOMUtils.js';

/**
 * Create an Answer element
 */
export const createAnswerElement = (answerText) => {
  const answerElement = createDOMElement('span');
  answerElement.innerText = answerText;

  return answerElement;
};

/* Create choices as answers */
export const createChoice=(choiceTitle, correctAnswerId) =>{

   const choiceElement = createDOMElement('button', {id : choiceTitle, 'data-testid': ('answer-'+choiceTitle), class : BTN_CLASS});
   choiceElement.innerText = choiceTitle;

  (choiceTitle==correctAnswerId) ? choiceElement.correct = true : choiceElement.correct=false;
   choiceElement.addEventListener('click', selectedAnswer);

   return choiceElement;
}

/**
 * Create a full question element
 */
export const createQuestionElement = (question) => {
  const container = createDOMElement('div');
  const title = createDOMElement('h1');
  title.innerText = question.text;
  container.appendChild(title);

  const answerContainer = createDOMElement('div', {id:ANSWERS_CONTAINER_ID, class: BTN_GRID_CLASS});

  for (const answerKey in question.answers) {
    const choice = createChoice(answerKey,question.correct);
    const answer = createAnswerElement(question.answers[answerKey]);
    answerContainer.appendChild(choice);
    answerContainer.appendChild(answer);
  }

  container.appendChild(answerContainer);

  return container;
};

/**
 * Creates and returns the next questions button
 */
export const createNextQuestionButtonElement = () => {
  const buttonElement = createDOMElement('button', {
    id: NEXT_QUESTION_BUTTON_ID, class: CONTROL_BTN_CLASS
  });

  buttonElement.innerText = 'Next';
  addClassToElement(buttonElement,BTN_CLASS)
  buttonElement.addEventListener('click', nextQuestion);

  return buttonElement;
};
/**
 * Creates and returns the finish button
 */
export const createFinishButtonElement = () => {
  const buttonElement = createDOMElement('button', {
    id: FINISH_QUIZ_BUTTON_ID, class: CONTROL_BTN_CLASS
  });

  buttonElement.innerText = 'Finish';
  addClassToElement(buttonElement,BTN_CLASS)
  buttonElement.addEventListener('click', finishQuiz);
  
  return buttonElement;
};

