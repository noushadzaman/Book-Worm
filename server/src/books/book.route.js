const express = require("express");
const {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteABook,
} = require("./book.controller.js");
const router = express.Router();

// get all books
router.get("/", getAllBooks);
// post a book
router.post("/create-book", postABook);
// get single book
router.get("/:id", getSingleBook);
// update a book
router.put("/edit/:id", updateBook);
// delete a book
router.delete("/delete/:id", deleteABook);

module.exports = router;