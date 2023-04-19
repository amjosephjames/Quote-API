const express = require("express");
const router = express.Router();
const {
  createQuote,
  getQuote,
  getQuotes,
  updateQuote,
  deleteQuote,
} = require("../controller/quoteController");

router.route("/create").post(createQuote);
router.route("/").get(getQuotes);
router.route("/:id").get(getQuote);
router.route("/:id/update").patch(updateQuote);
router.route("/:id/delete").delete(deleteQuote);

module.exports = router;
