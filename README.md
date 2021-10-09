# Getting Started

This is a simple Math Quiz using Javascript and DOM. 

## Development

To run this project locally you will need to open `index.html` in your browser using a local server. LiveServer, `http-server`, `study-lenses`, or any other local static server will work. Also. you can reach the demo directly via [this link.](https://esranurgalipkayahan.github.io/Math-Quiz/)

## Installing Dependencies

There are no dependencies needed to run the website, everything is prepared to work with vanilla JavaScript. However, if you want to install prettier for this project then run (generally you always want to do this if you see a `package.json` file):

- `npm install`

# Structure

Let's run through the folders:

```
public
src
└── handlers
└── init
└── listeners
└── utils
└── views
└── data.js
index.html
```

- `public` this contains the static files that can be used by our `index.html` file
- `src` this contains all of our JavaScript code
- `handlers` this contains our functions that handle user interactions. You can also see it as the code that processes and updates the data or DOM
- `init` this contains our initialisation code. Generally this code should only run once and starts the application
- `listeners` this contains our code that links up our handler code to the DOM. This is separate because it is possible to have the same handler code be given to different listeners
- `utils` this contains code that are pure functions and can be used throughout the application. These functions take data and give back a result. They should not interact with anything outside of their scope!
- `views` this contains code to define what the DOM will look like. They will create the DOM element and give it back. They should never read from/write to the dom, that is what the handlers do.
- `data.js` this is our data model. Anything we need to store in the browser we place inside the data file

## Must-Haves

> these are necessary for basic usability

- [ ] A user can see one question at a time, stepping through the quiz
- [ ] A user can select an answer for each question
- [ ] A user can know which questions they got correct and incorrect (either immediately or at the end of the quiz)
- [ ] A user can see the correct answer for questions (either immediately or at the end of the quiz)
- [ ] A user can see their score at the end of the quiz


