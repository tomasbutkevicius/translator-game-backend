const express = require("express");
const router = express.Router();
const quotesController = require("../controllers/QuotesController");

router.get("/", quotesController.getQuote);

module.exports = router;