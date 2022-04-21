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
  let tokenGroup = { list: tokenArray };
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
  let descr = generateDescription(name);
  let imgUrl = generateImgUrl(tokenNumber);
  let pos1 = buildPositionMeaning(name, 1);
  let pos2 = buildPositionMeaning(name, 2);
  let pos3 = buildPositionMeaning(name, 3);
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
  // Capitalize the first letter
  let first = name[0].toUpperCase();
  let rest = name.slice(1);
  name = first + rest;
  // return the name
  return name;
}

/**
 * Builds a standard URL for the image associated with a token.  The number will
 * be integrated into the name of the file.  Assumes that images are in PNG
 * format.
 *
 * @param {number} tokenNumber - The number of the token
 * @returns string - The URL for the image associated with the token
 */
function generateImgUrl(tokenNumber) {
  let numValue = ("00" + tokenNumber).slice(-2);
  let imgUrl = "images/image_" + numValue + ".png";
  return imgUrl;
}

/**
 * Generates and returns a generic description of the token specified.
 *
 * @param {string} tokenName - Name of the token being described
 * @returns string - Generic description text for the token
 */
function generateDescription(tokenName) {
  let descr = `General description for the ${tokenName} token.`;
  return descr;
}

/**
 * Each token has a specific meaning at a specific location in the reading.
 * This function returns a placeholder piece of text for the token in the
 * position specified.
 *
 * @param {string} tokenName - The name of the token
 * @param {number} position - The number of the position
 * @returns string - The meaning text.
 */
function buildPositionMeaning(tokenName, position) {
  let meaning = `${tokenName} in position ${position} means: `;
  // Add fifty character -- 50 is an arbitrary choice
  for (let i = 0; i < 50; i++) {
    let char = Math.floor(Math.random() * 30) + 1;
    if (char > 26) {
      meaning += " "; // space
    } else {
      // ASCII lowercase letters start at character code 97
      let letter = String.fromCharCode(char + 96);
      meaning += letter;
    }
  }
  return meaning;
}
