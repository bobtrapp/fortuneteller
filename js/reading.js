/**
 * @file reading.js
 * @date 2022-04-21
 * @author Bob Trapp
 * @description Provides the management of the reading
 */
"use strict";

class Reading {
  /**
   * Initializes a Reading object with the specified TokenSet.
   *
   * @param {TokenSet} tokenset - The set of tokens needed for readings
   */
  constructor(tokenset) {
    this.tokenset = tokenset;
    // Hard-coded value is bad, but member variable allows for easier
    // expansion of the class later.
    this.positionCount = 3;
  }

  /**
   * Performs the reading logic, assigning random Token objects from the
   * TokenSet to the positions array.  Returns the positions array.
   *
   */
  doReading = function () {
    let positions = [];
    let tokenIndexes = this.getTokenIndexes();
    for (let i = 0; i < this.positionCount; i++) {
      let token = this.tokenset.tokens[tokenIndexes[i]];
      let pos = new ReadingPostion(i + 1, token);
      positions.push(pos);
    }
    return positions;
  };

  /**
   * Creates a unique list of array indexes for the tokenset.
   *
   * @returns Array of index values
   */
  getTokenIndexes = function () {
    let values = [];
    for (let i = 0; i < this.positionCount; i++) {
      let needed = true;
      while (needed) {
        let index = Math.floor(Math.random() * this.tokenset.tokens.length);
        if (!values.includes(index)) {
          values.push(index);
          needed = false;
        }
      }
    }
    return values;
  };
}
