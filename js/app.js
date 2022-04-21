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
    Primary Code 
**************************************************************************** */

/**
 * The initializeApp() function acts as a starting point for the entire
 * application.  All other code should be reached through a path starting
 * here or in response to an event.
 */
function initializeApp() {
  console.log("Initialization function loaded.");
  let button = document.getElementById("askButton");
  button.addEventListener("click", tellFortune, false);
  let question = document.getElementById("question");
  question.addEventListener("keyup", checkQuestionText, false);
  document.getElementById("question").focus();
}

/**
 * Performs the fortune telling process when the askButton is clicked.
 * This is the click event handler for the askButton element on index.html.
 *
 */
function tellFortune() {
  //fillTokens();
  let tokenSet = new TokenSet();
  let reading = new Reading(tokenSet);
  let readingTokens = reading.doReading();
  console.log(readingTokens);
  drawReading(readingTokens);
  //drawThreeChoices(choices);
  document.getElementById("question").focus();
}

/**
 * Handles the drawing of the reading.
 *
 * @param {Array} readingTokens - an array of ReadingPosition objects
 */
function drawReading(readingTokens) {
  let section = getReadingSection(); // a section
  let div = document.createElement("div");
  div.setAttribute("class", "tokenDiv");
  section.appendChild(div);
  for (let i = 0; i < readingTokens.length; i++) {
    let position = buildTokenElement(readingTokens[i], i + 1);
    div.appendChild(position);
  }
}

/**
 * Builds and returns a section element for displaying the reading.
 *
 * @returns section - A formatted section for the reading display
 */
function getReadingSection() {
  // Get the display section
  let section = document.getElementById("responseSection");
  // Clear the section of any old items
  section.innerHTML = "";
  // Create a heading for the section
  let heading = document.createElement("h2");
  heading.textContent = "Your Reading";
  section.appendChild(heading);
  //Add the question - using a div for better formatting
  let questionDiv = document.createElement("div");
  let qp = document.createElement("p");
  qp.textContent =
    "Your question: " + document.getElementById("question").value;
  questionDiv.appendChild(qp);
  section.appendChild(questionDiv);
  // return the section
  return section;
}

/**
 * This is the event handler for when the question text box changes.  This is
 * used to deactivate the Ask button when there is no text and then activate the
 * button when there is text.
 */
function checkQuestionText() {
  let question = document.getElementById("question").value;
  let askButton = document.getElementById("askButton");
  if (question === "") {
    askButton.disabled = true;
  } else {
    askButton.disabled = false;
  }
}

/**
 * Creates the display element for the supplied ReadingPosition.
 *
 * @param {ReadingPosition} readingPosition - contains Token
 * @param {number} position - The number of the position in the reading
 */
function buildTokenElement(readingPosition, position) {
  // Build the containing section
  let section = document.createElement("section");
  section.setAttribute("class", "tokenSection");
  // Use the Token name as the section heading
  let heading = document.createElement("h3");
  heading.textContent = readingPosition.token.name;
  section.appendChild(heading);
  // Add the image from the token
  let img = document.createElement("img");
  img.setAttribute("src", readingPosition.token.imgUrl);
  img.setAttribute("alt", "Image for " + readingPosition.token.name);
  img.setAttribute("class", "tokenImg");
  section.appendChild(img);
  // Add the description
  let p = document.createElement("p");
  p.textContent = readingPosition.token.description;
  section.appendChild(p);
  // Add the meaning for the postion
  let meaning = readingPosition.getPositionMeaning();
  let meaningP = document.createElement("p");
  meaningP.textContent = meaning;
  section.appendChild(meaningP);
  // return the section to be used elsewhere
  return section;
}

/* ****************************************************************************
    | 
**************************************************************************** */

/* ****************************************************************************
    END OF FILE 
**************************************************************************** */
