// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions=require("firebase-function");

// const function=requires("firebase-functions");
const express= require("express");

const cors =require("cors");
const stripe =require ("stripe")("sk_test_51Nc6GUSF7D7Kh7sQq2BzDisXcpE8HZvXuPHOLBWrjchblhXTtj6vdzMmGgHDl5YZcqqNuRZfcae4654aRYqfjkCY00rzU5sjrj");

//  API

// -App config Setting up for Express Server
const app = express();

// - Middlewares
app.use(cors({orign: true}));
app.use(express.json());

// API Routes
app.get('/',(request, response)=>response.status(200).send('hello world'));

// -listen Command
exports.api =functions.https.onRequest(app);

// In Terminal under function -> firebase emulators:start