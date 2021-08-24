'use strict';

import {  handleSelectedAnswer } from '../handlers/answerHandler.js';
//listens to the user event
export const selectedAnswer = (e) => {
  //deliver this event to the handlers
  handleSelectedAnswer(e);
};
