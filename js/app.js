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

/* ****************************************************************************
    | 
**************************************************************************** */

/* ****************************************************************************
    END OF FILE 
**************************************************************************** */
