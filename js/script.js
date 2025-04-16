// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: Apr 2025
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function checks if the user has selected the random number from above
 */
// eslint-disable-next-line no-unused-vars
function checkNumber () {
  // input
  const userNumber = parseFloat(document.getElementById("user-number").value)

  // process
  if (userNumber === randomNumber) {
    // output
    document.getElementById("answer").innerHTML =
      "You have guessed the right number!"
  }
  if (userNumber !== randomNumber) {
    // output
    document.getElementById("answer").innerHTML =
      "You have guessed the wrong number! The number was " + randomNumber + "."
  }
}
