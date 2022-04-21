/**
 * @file token.js
 * @date 2022-04-19
 * @author Bob Trapp
 * @description The class definition for the reading tokens
 */
"use strict";

class Token {
  /**
   * The constructor allows for instantiating a token to be used in the
   * fortune telling activity.
   *
   * @param {string} name The name of the token
   * @param {string} description The description of the token
   * @param {string} imgUrl The URL to the image file for the token
   * @param {string} pos1 - The meaning of the token in the first position
   * @param {string} pos2 - The meaning of the token in the second position
   * @param {string} pos3 - The meaning of the token in the third position
   */
  constructor(name, description, imgUrl, pos1 = "", pos2 = "", pos3 = "") {
    this.name = name;
    this.description = description;
    this.imgUrl = imgUrl;
    this.pos1 = pos1;
    this.pos2 = pos2;
    this.pos3 = pos3;
  }
}
