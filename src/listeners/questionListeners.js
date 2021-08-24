'use strict';

import { handleNextQuestion } from '../handlers/questionHandlers.js';
//to show next question, handle the user next request
export const nextQuestion = () => {
  handleNextQuestion();
};
