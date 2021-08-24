'use strict';
import { HEADER_CONTAINER_ID, HEADER_CLASS, HEADER_SCORE_ELEMENT_ID,  HEADER_LEVEL_ELEMENT_ID , CURRENT_TIME_ID} from "../constants.js";
import { findScore } from "../handlers/finishHandler.js";
import { createDOMElement, getDOMElement } from "../utils/DOMUtils.js";
import { quizData } from "../data.js";
import { startStopwatch } from "../handlers/timeHandler.js";


export const getHeader = () => {
    //create  header which contains 3 sections show the level, score and time seperately
    const headerContainer = createDOMElement('div',{id : HEADER_CONTAINER_ID, class : HEADER_CLASS});
    const currentLevelElement = createDOMElement('h3', {id: HEADER_LEVEL_ELEMENT_ID});
    const currentScoreElement = createDOMElement('h3',{id:HEADER_SCORE_ELEMENT_ID});
    const currentTimeElement = createDOMElement('h3', {id: CURRENT_TIME_ID});

    headerContainer.appendChild(currentLevelElement);
    headerContainer.appendChild(currentScoreElement);

    currentTimeElement.innerText = '00:00';
    headerContainer.appendChild(currentTimeElement);

  return headerContainer;
}
//displaying information about the situation
export const updateDisplay =() =>{
    
    updateCurrentLevel(); 
    updateScoreDisplay();
    
    
}
//updating user score
export const updateScoreDisplay = () =>{
    const scoreElement = getDOMElement(HEADER_SCORE_ELEMENT_ID);
    scoreElement.innerText =''+findScore()+'%';
}
//updating the current question number which is displayed to inform user
export const updateCurrentLevel = () =>{
   const currentLeveElement= getDOMElement(HEADER_LEVEL_ELEMENT_ID);
   currentLeveElement.innerText = ''+ (quizData.currentQuestionIndex+1)+'/'+quizData.questions.length;
}
