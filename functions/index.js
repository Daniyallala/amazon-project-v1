// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

import express from "express";

import cors from "cors";
const stripe =require ("stripe")("sk_test_51Nc6GUSF7D7Kh7sQq2BzDisXcpE8HZvXuPHOLBWrjchblhXTtj6vdzMmGgHDl5YZcqqNuRZfcae4654aRYqfjkCY00rzU5sjrj");

//  API

// -App config Setting up for Express Server
const app = express();

// - Middlewares
app.use(cors({orign: true}));
app.use(express.json());

// API Routes
app.get('/',(request, response)=>response.status(200).send('hello world'));


app.post('/payment/create,async',async (request, response)=>{
    const total= request.querry.total;
    console.log("Total Payment Recieved>>",total);

    const paymentIntent= awaitstripe.paymentIntent.create({
        amount:total,
        currency:"inr",
    });
})
