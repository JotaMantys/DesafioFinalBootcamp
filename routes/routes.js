//const express = require('express');
import express from "express"
import { getTransactionsPeriod
        ,createTransaction
        ,updateTransactionById
        ,deleteTransactionById
        ,listDates
       } from "../controllers/TransactionController.js"
const transactionRouter = express.Router();

//module.exports = transactionRouter;

transactionRouter.get("/" , getTransactionsPeriod)
transactionRouter.get("/dates" , listDates)
transactionRouter.post("/", createTransaction)
transactionRouter.put("/:id", updateTransactionById)
transactionRouter.delete("/:id", deleteTransactionById)

export default transactionRouter;
