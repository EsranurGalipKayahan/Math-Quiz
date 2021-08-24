'use strict';
import { BTN_CLASS, CONTROL_BTN_CLASS, START_SCREEN_ID, START_CLASS} from "../constants.js";
import { addClassToElement, createDOMElement, getDOMElement } from "../utils/DOMUtils.js";
import { startQuiz } from "../listeners/startListener.js";




export const setupStartScreenHTML=()=>{
    //by adding startScreenContainer, inform user 
    const container = getDOMElement('container');

    const startScreenContainer = createStartScreen();
   
    container.appendChild(startScreenContainer);
}

const createStartButton =() =>{
    //To start the quiz, the user should click the start button
    const startButton = createDOMElement('button', {class: CONTROL_BTN_CLASS});
    addClassToElement(startButton,BTN_CLASS);
    startButton.innerText = 'Start';
    startButton.addEventListener('click', startQuiz);

    return startButton;
}
const createHeader =()=>{
    //Creating Welcome Message to the user
    const headerElement = createDOMElement('h2');
    headerElement.innerText = 'Welcome to the Math Quiz';

    return headerElement;
}
const createStartScreen=()=>{
    //Creating start screen by adding the other required components
    const startScreenContainer = createDOMElement('div', {id : START_SCREEN_ID, class : START_CLASS});
    startScreenContainer.appendChild(createHeader());
    startScreenContainer.appendChild(createStartButton());
    
    return startScreenContainer;
}