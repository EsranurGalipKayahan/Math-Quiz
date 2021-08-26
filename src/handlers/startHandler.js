
'use strict';
import { quizData } from "../data.js";
import { setupQuizHTML } from "../views/quizView.js";
import { showCurrentQuestion } from '../handlers/questionHandlers.js';
import { getDOMElement } from "../utils/DOMUtils.js";
import {createStartScreen}from "../views/startViews.js";

export const handleStartQuiz = () => {
    //to start the quiz, adjust the required settings
    quizData.currentQuestionIndex = 0;
    //adjust the view
    setupQuizHTML();
    //display the view
    showCurrentQuestion();
}
export const setupStartScreenHTML=()=>{
    //by adding startScreenContainer, inform user 
    const container = getDOMElement('container');

    const startScreenContainer = createStartScreen();
   
    container.appendChild(startScreenContainer);
}