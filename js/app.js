/**
 * @file app.js
 * @date 2022-04-19
 * @author Bob Trapp
 * @description Handles the fortune teller logic for the application
 */
"use strict";

/* ****************************************************************************
    Global variables 
**************************************************************************** */

// The array of tokens
var tokens;

/* ****************************************************************************
    Data (not stored on the server or database for this project) 
**************************************************************************** */

var tokenData = {
  list: [
    {
      name: "First",
      description: "The first item",
      imgUrl: "images/first.png",
    },
    {
      name: "Second",
      description: "The second item",
      imgUrl: "images/second.png",
    },
    {
      name: "Third",
      description: "The third item",
      imgUrl: "images/third.png",
    },
    {
      name: "Fourth",
      description: "The fourth item",
      imgUrl: "images/fourth.png",
    },
    {
      name: "Fifth",
      description: "The fifth item",
      imgUrl: "images/fifth.png",
    },
    {
      name: "Sixth",
      description: "The sixth item",
      imgUrl: "images/sixth.png",
    },
    {
      name: "Seventh",
      description: "The seventh item",
      imgUrl: "images/seventh.png",
    },
    {
      name: "Eigth",
      description: "The eigth item",
      imgUrl: "images/eigth.png",
    },
    {
      name: "Ninth",
      description: "The ninth item",
      imgUrl: "images/ninth.png",
    },
  ],
};

/* ****************************************************************************
    Primary Code 
**************************************************************************** */

/**
 * The initializeApp() function acts as a starting point for the entire
 * application.  All other code should be reached through a path starting
 * here or in response to an event.
 */
function initializeApp() {
  console.log("Initialization function loaded.");
  fillTokens();
  console.log(tokens);
  let button = document.getElementById("askButton");
  button.addEventListener("click", tellFortune, false);
}

/**
 * Fills the tokens array global variable
 */
function fillTokens() {
  tokens = [];
  for (let i = 0; i < tokenData.list.length; i++) {
    let current = tokenData.list[i];
    let theToken = new Token(current.name, current.description, current.imgUrl);
    tokens.push(theToken);
  }
}

/**
 * Performs the fortune telling process when the askButton is clicked.
 * This is the click event handler for the askButton element on index.html.
 *
 */
function tellFortune() {
  let choices = getThreeTokens();
  console.log(`Choices: ${choices}`);
  drawThreeChoices(choices);
}

/**
 * Returns an array of indexes associated with the tokens array.  The logic
 * prevents duplicates in a single reading.
 *
 * @returns An array of unique index values
 */
function getThreeTokens() {
  let values = [];
  for (let i = 0; i < 3; i++) {
    let needed = true;
    while (needed) {
      let index = Math.floor(Math.random() * tokens.length);
      if (!values.includes(index)) {
        values.push(index);
        needed = false;
      }
    }
  }
  return values;
}

/**
 * Displays the three selected tokens on the index.html page.  This is set as
 * an individual function for three tokens so the app can be expanded for other
 * combinations at a future time.
 *
 * @param {Array} choices - An array of index values for three selected tokens
 */
function drawThreeChoices(choices) {
  // Get the display section
  let section = document.getElementById("responseSection");
  // Clear the section of any old items
  section.innerHTML = "";
  // Create a heading for the section
  let heading = document.createElement("h2");
  heading.textContent = "Your Reading";
  section.appendChild(heading);
  // Add the token div
  let div = document.createElement("div");
  div.setAttribute("class", "tokenDiv");
  section.appendChild(div);
  // Display the tokens
  for (let i = 0; i < choices.length; i++) {
    let element = buildTokenElement(tokens[choices[i]]);
    div.appendChild(element);
  }
}

/**
 * Builds an HTML element to display the supplied Token object.
 *
 * @param {Token} theToken - The token to display
 */
function buildTokenElement(theToken) {
  let section = document.createElement("section");
  section.setAttribute("class", "tokenSection");
  // Token name as a heading
  let heading = document.createElement("h3");
  heading.textContent = theToken.name;
  section.appendChild(heading);
  // Add the image
  let img = document.createElement("img");
  img.setAttribute("src", theToken.imgUrl);
  img.setAttribute("alt", theToken.name);
  img.setAttribute("class", "tokenImg");
  section.appendChild(img);
  // Add the description
  let p = document.createElement("p");
  p.textContent = theToken.description;
  section.appendChild(p);
  // return the completed element
  return section;
}

/* ****************************************************************************
    | 
**************************************************************************** */

/* ****************************************************************************
    END OF FILE 
**************************************************************************** */
