'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

//set questions and answers
export const quizData = { 
  currentQuestionIndex:0,
  numberOfCorrectAnswers:0,
  numberOfWrongAswers:0,
  time:'00:00',
 questions : [
  {
    text: 'What is 2 + 2?',
    answers: 
      { 'a': '4', 'b': '2','c': '6', 'd': '12'},
    correct : 'a',
    selected:null
  },
  {
    text: 'What is 16/4?',
    answers: 
      { 'a': '16', 'b': '4', 'c': '0', 'd': '8'},
      correct: 'b',
      selected:null
  },
  {
    text: 'What is 22+88?',
    answers: 
      { 'a': '100',  'b': '110', 'c': '15', 'd': '10' },
      correct: 'b',
      selected:null
  },
  {
    text: 'What is 4 * 2?',
    answers: 
      { 'a': '6',  'b': '8','c': '10','d': '4'},
      correct: 'b',
      selected:null
  },
  {
    text: 'What is 5^2?',
    answers: 
      { 'a': '7', 'b': '10','c': '3', 'd': '25'},
      correct: 'd',
      selected:null
  },
  {
    text: 'What is 25/5?',
    answers:
      { 'a': '25', 'b': '15','c': '5','d': '20'},
      correct: 'c',
      selected:null
  },
  {
    text: 'What is 60-99?',
    answers: 
      { 'a': '6', 'b': '39', 'c': '-31','d': '-39'},
      correct: 'd',
      selected:null
  },
  {
    text: 'What is 12^0?',
    answers: 
      { 'a': '1', 'b': '0', 'c': '12', 'd': '13'},
      correct: 'a',
      selected:null
  },
  {
    text: 'What is 65-66?',
    answers:
      { 'a': '6', 'b': '1', 'c': '-1','d': '0'},
      correct: 'c',
      selected:null
  },
  {
    text: 'What is 2222+66?',
    answers: 
      { 'a': '2223', 'b': '2288','c': '2266','d': '6622' },
      correct: 'b',
      selected:null
  }
]
};
