function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return { name, age, pronouns };
}

function saveReview(bookReview, reviews) {
  if (!reviews.includes(bookReview)) {
    reviews.push(bookReview);
  } else {
    return reviews;
  }
}

function calculatePageCount(bookTitle, _bookPageCount) {
  return (bookPageCount = bookTitle.length * 20);
}

function writeBook(title, mainCharacter, genre) {
  var book = {
    title,
    mainCharacter,
    pageCount: calculatePageCount(title),
    genre,
  };
  return book;
}

function editBook(book) {
  book.pageCount = book.pageCount * 0.75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
}