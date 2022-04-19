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
   */
  constructor(name, description, imgUrl) {
    this.name = name;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}
