const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");
dotenv.config();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

//routes
const bookRoutes = require("./src/books/book.route");
app.use("/api/books", bookRoutes);

async function main() {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
  app.use("/", (req, res) => {
    res.send("Boooooooo:) book:)");
  });
}

main()
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
