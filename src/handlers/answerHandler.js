'use strict';

import { ANSWERS_CONTAINER_ID } from "../constants.js";
import { quizData } from "../data.js";
import { getDOMElement, setStatusClass} from "../utils/DOMUtils.js";
import { updateScoreDisplay} from "../views/headerViews.js";


export const  handleSelectedAnswer = (e) => {
  //find the user clicks which button 
  const selectedButton = e.target
  
  //to give one chance to choose an answer to the user, disable all buttons
  disableChoices();
  //to show the user which choise is correct or not, change the buttons status
  changeButtonStatus();
  //to save user choices, log the answers
  logAnswers(selectedButton);  
  //to inform user instantly about his score, update score 
  updateScoreDisplay();
};
const  disableChoices = () =>
{
    const answerContainer = getDOMElement(ANSWERS_CONTAINER_ID);
    //get all buttons in the answer container
    const buttonLists = answerContainer.querySelectorAll('button');
    //do them inactive
    for(let a=0; a<buttonLists.length;a++){
        buttonLists[a].disabled=true;
    }
};
const changeButtonStatus=()=>{

  const answerContainer = getDOMElement(ANSWERS_CONTAINER_ID);
     //get all buttons in the answer container
  const buttonLists = answerContainer.querySelectorAll('button');
     //chance the classes of the buttons according to their status
  for(let a=0; a<buttonLists.length;a++){
      setStatusClass(buttonLists[a],buttonLists[a].correct)
  }
}
const logAnswers=(selectedButton)=>{

  const correctAnswer = quizData.questions[quizData.currentQuestionIndex].correct;
  //log the selected answer
  quizData.questions[quizData.currentQuestionIndex].selected=selectedButton.id   

  if (correctAnswer===selectedButton.id)//if the correct answer is selected
  { 
     quizData.numberOfCorrectAnswers++;//log the result
  }
  else { //if the wrong answer is selected
     quizData.numberOfWrongAswers++//log the result
  }
}
