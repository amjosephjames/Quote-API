const quoteModel = require("../model/quoteModel");

const createQuote = async (req, res) => {
  try {
    const { quotation, author } = req.body;

    const quote = await quoteModel.create({
      quotation,
      author,
    });
    return res.status(201).json({ message: "quote created", data: quote });
  } catch (error) {
    console.log(error);
  }
};
const getQuotes = async (req, res) => {
  try {
    const quote = await quoteModel.find();
    return res.status(200).json({ message: "all quotes", data: quote });
  } catch (error) {
    console.log(error);
  }
};
const getQuote = async (req, res) => {
  try {
    const quote = await quoteModel.findById(req.params.id);

    return res.status(200).json({ message: "single quote", data: quote });
  } catch (error) {
    console.log(error);
  }
};
const updateQuote = async (req, res) => {
  try {
    const { quotation } = req.body;
    const quote = await quoteModel.findByIdAndUpdate(
      req.params.id,
      { quotation },
      { new: true }
    );
    return res.status(200).json({ message: `updated`, data: quote });
  } catch (error) {
    console.log(error);
  }
};
const deleteQuote = async (req, res) => {
  try {
    const quote = await quoteModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: `Delete` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createQuote,
  getQuotes,
  getQuote,
  updateQuote,
  deleteQuote,
};
