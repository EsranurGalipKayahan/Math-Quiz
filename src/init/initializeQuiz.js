'use strict';

import { setupStartScreenHTML } from '../handlers/startHandler.js';

const initializeQuiz = () => {
  setupStartScreenHTML();
};
window.addEventListener('load', initializeQuiz);