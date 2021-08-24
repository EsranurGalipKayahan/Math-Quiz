'use strict';

import { setupStartScreenHTML } from '../views/startViews.js';

const initializeQuiz = () => {
  setupStartScreenHTML();
};
window.addEventListener('load', initializeQuiz);