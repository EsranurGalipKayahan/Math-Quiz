'use strict';
import { RESULT_CONTAINER_ID, RESULT_HEADER, RESULT_CLASS, HEADER_RESULT_CLASS, WRONG_CLASS, CORRECT_CLASS, PASSED_CLASS, CONTROL_BTN_CLASS,BTN_CLASS} from "../constants.js";
import { createDOMElement } from "../utils/DOMUtils.js";
import { findScore, findNumberOfPassedQuestions} from "../handlers/finishHandler.js";
import { addClassToElement } from "../utils/DOMUtils.js";
import { quizData } from "../data.js";
import { quit } from "../listeners/quitListener.js";



export const getScoreElement = () =>{

    const scoreElement = createDOMElement('h2');
    const score =  findScore();
    //if the score is below pass score, display score as red, otherwise as green
    (score>= 65) ? addClassToElement(scoreElement,CORRECT_CLASS) : addClassToElement(scoreElement,WRONG_CLASS)  ;
    scoreElement.innerHTML = 'Your Score : '+score+'%';
    scoreElement.innerHTML+='<br>Total Time : '+quizData.time;
    return scoreElement;
}
export const getSummaryElement = () =>{
    //display how many questions are correct, wrong and passed seperately
    const summaryElement = createDOMElement('h3');
    const summaryString1 = createDOMElement('span');
    addClassToElement(summaryString1,CORRECT_CLASS);
    summaryString1.innerHTML = 'Correct Answers : '+quizData.numberOfCorrectAnswers+'<br>';
    const summaryString2 = createDOMElement('span');
    addClassToElement(summaryString2,WRONG_CLASS);
    summaryString2.innerHTML = 'Wrong Answers : '+quizData.numberOfWrongAswers+'<br>';
    const summaryString3 = createDOMElement('span');
    addClassToElement(summaryString3,PASSED_CLASS);
    summaryString3.innerHTML = 'Passed Questions : '+findNumberOfPassedQuestions();

    summaryElement.appendChild(summaryString1);
    summaryElement.appendChild(summaryString2);
    summaryElement.appendChild(summaryString3);

    return summaryElement;
}
export function getHeaderElement(){
    const headerElement = createDOMElement('div',{id : RESULT_HEADER, class: HEADER_RESULT_CLASS});
    return headerElement;
}
export function getBodyContainer(){
    const bodyContainer = createDOMElement('div', {id : RESULT_CONTAINER_ID, class : RESULT_CLASS });
    return bodyContainer;
}
  

  export function prepareQuestionList(){
      //adjust the HTML to display the all questions
      const bodyElement = createDOMElement('ol');
  
      for(let i=0;i<quizData.questions.length;i++){
          const element = prepareQuestion(quizData.questions[i]);
          bodyElement.appendChild(element);
      }
      return bodyElement;
  }
  function prepareQuestion(question){
      //Prepare the current question, correct answer and the user's answer
      const questionElement = createDOMElement('li');
      questionElement.innerHTML = question.text+'<br> <strong> Correct Answer : '+question.correct+' </strong><br> <em>Your Answer : ';
      const selectedAnswer = question.selected;
      (selectedAnswer===null) ? questionElement.innerHTML+= 'Empty</em>' :  questionElement.innerHTML+= selectedAnswer+'</em>' ;
      return questionElement;
  }
 export function  createQuitButton(){

    const exitButtonElement = createDOMElement('button', {class : CONTROL_BTN_CLASS});
    addClassToElement(exitButtonElement, BTN_CLASS);
    exitButtonElement.innerText = 'Quit';
    exitButtonElement.addEventListener('click', quit);
    return exitButtonElement;
  }