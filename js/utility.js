/**
 * @file utility.js
 * @date 2022-04-21
 * @author Bob Trapp
 * @description Demonstrates making a utility program with limited tools.
 */
"use strict";

/**
 * The starting point for the application logic.  This should be activated by
 * the onClick() event on the generate button in utility.html
 *
 */
function performTask() {
  console.log("In performTask()");
  // Generate nine token items and add them to an array
  let tokenArray = [];
  for (let i = 0; i < 9; i++) {
    let token = buildToken(i + 1);
    tokenArray.push(token);
  }
  console.log(`Token Array: ${tokenArray}`);
  // Make a JSON object
  let tokenGroup = { tokens: tokenArray };
  // output to outputTextarea
  let outputTextarea = document.getElementById("outputTextarea");
  outputTextarea.innerHTML = JSON.stringify(tokenGroup);
}

/**
 * Builds and returns a Token object.  The names are built according to rules
 * to create a consistent system.
 *
 * @param {number} tokenNumber The number of the token
 * @returns Token
 */
function buildToken(tokenNumber) {
  let name = buildName();
  let descr = "A randomly generated token";
  let imgUrl = "image" + tokenNumber + ".png";
  let pos1 = "pos 1";
  let pos2 = "pos 2";
  let pos3 = "pos 3";
  let token = new Token(name, descr, imgUrl, pos1, pos2, pos3);
  return token;
}

/**
 * Builds and returns a randomly designed name based on rules for naming.
 *
 * @returns string - The randomly generated name
 */
function buildName() {
  let endings = ["erv", "ong", "emel", "rak"];
  let syllables = [
    "kah",
    "roh",
    "nom",
    "bohk",
    "tve",
    "mel",
    "zho",
    "du",
    "fo",
    "sta",
    "chu",
  ];
  // Get first syllable
  let index = Math.floor(Math.random() * syllables.length);
  let name = syllables[index];
  // Determine if there is a middle syllable
  let choice = Math.floor(Math.random() * 2);
  if (choice % 2 === 0) {
    // Even number
    index = Math.floor(Math.random() * syllables.length);
    name = name + syllables[index];
  }
  // Attach ending
  let endingIndex = Math.floor(Math.random() * endings.length);
  name = name + endings[endingIndex];
  return name;
}
