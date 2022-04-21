/**
 * @file readingposition.js
 * @date 2022-04-21
 * @author Bob Trapp
 * @description Defines the class for a single position in a reading.
 */
"use strict";

class ReadingPostion {
  /**
   * Initializes an instance of this ReadingPosition with a Token.
   *
   * @param {number} positionNumber - The number of this position in the reading
   * @param {Token} token - The Token object at this position
   */
  constructor(positionNumber, token) {
    this.positionNumber = positionNumber;
    this.token = token;
  }

  /**
   * Returns the position-specific meaning from the token and returns that.
   *
   * @returns string - The meaning of the token at this position.
   */
  getPositionMeaning = function () {
    let meaning = "";
    let props = Object.getOwnPropertyNames(this.token);
    for (let i = 0; i < props.length; i++) {
      if (props[i].startsWith("pos")) {
        // it is one of the position meanings, so check the number
        if (props[i].slice(3) == this.positionNumber) {
          // A match
          meaning = this.token[props[i]];
          break;
        }
      }
    }
    return meaning;
  };
}
