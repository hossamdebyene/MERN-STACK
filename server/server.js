const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = express();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require("./routes/customer"));
const connectDB = require("./config/db");
connectDB();

app.use("/api/customer", require("./routes/customer"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
