const express = require("express");                             // create an instance of express framework

const test = express.Router();                                // create new router object

const { test } = require("../controllers/testController");    // declare routing path

test.post("/test", test);                                 // set up routing path for signup

module.exports = test;                                        // grant permission to access this file from other files