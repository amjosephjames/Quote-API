const mongoose = require("mongoose");

const quoteModel = mongoose.Schema(
  {
    quotation: {
      type: String,
    },
    author: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("quotes", quoteModel);
