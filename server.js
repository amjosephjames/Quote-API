// require("./utils/db")
const express = require("express");
const cors = require("cors");
// const port = 3004

const dotenv = require("dotenv");
const PORT = process.env.PORT || 3004;
const connectDB = require("./utils/db");
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

app.use("/api/quote", require("./router/quoteRouter"));

connectDB();

app.listen(PORT, () =>
  console.log(`server is now listening on port 
 ${PORT}`)
);
