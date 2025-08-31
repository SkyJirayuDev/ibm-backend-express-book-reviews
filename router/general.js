const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

function getBooks(){
  return new Promise((resolve,reject)=>{
    resolve(books);
  });
}

function getByISBN(isbn){
  return new Promise((resolve,reject)=>{
    let isbnNum = parseInt(isbn);
    if (books[isbnNum]) {
      resolve(books[isbnNum]);
    } else {
      reject({status:404,message:`ISBN ${isbn} not found`});
    }
  });
}

function getByAuthor(author){
  return new Promise((resolve,reject)=>{
    let booksbyauthor = [];
    let isbns = Object.keys(books);
    isbns.forEach((isbn) => {
      if(books[isbn]["author"] === author) {
        booksbyauthor.push({"isbn":isbn,
                             "title":books[isbn]["title"],
                             "reviews":books[isbn]["reviews"]});
      }
    });
    resolve(booksbyauthor);
  });
}

function getByTitle(title){
  return new Promise((resolve,reject)=>{
    let booksbytitle = [];
    let isbns = Object.keys(books);
    isbns.forEach((isbn) => {
      if(books[isbn]["title"] === title) {
        booksbytitle.push({"isbn":isbn,
                           "author":books[isbn]["author"],
                           "reviews":books[isbn]["reviews"]});
      }
    });
    resolve(booksbytitle);
  });
}


public_users.post("/register", (req,res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (!isValid(username)) { 
      users.push({"username":username,"password":password});
      return res.status(200).json({message: "User successfully registred. Now you can login"});
    } else {
      return res.status(404).json({message: "User already exists!"});    
    }
  } 
  return res.status(404).json({message: "Unable to register user."});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  res.send(JSON.stringify(books,null,4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  res.send(books[isbn]);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  let booksbyauthor = [];
  let isbns = Object.keys(books);
  isbns.forEach((isbn) => {
    if(books[isbn]["author"] === req.params.author) {
      booksbyauthor.push({"isbn":isbn,
                           "title":books[isbn]["title"],
                           "reviews":books[isbn]["reviews"]});
    }
  });
  res.send(JSON.stringify({booksbyauthor}, null, 4));
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  let booksbytitle = [];
  let isbns = Object.keys(books);
  isbns.forEach((isbn) => {
    if(books[isbn]["title"] === req.params.title) {
      booksbytitle.push({"isbn":isbn,
                         "author":books[isbn]["author"],
                         "reviews":books[isbn]["reviews"]});
    }
  });
  res.send(JSON.stringify({booksbytitle}, null, 4));
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  res.send(books[isbn]["reviews"]);
});

// Task 10: Get all books using async callback function
public_users.get('/async/',async function (req, res) {
  try {
    const booksdata = await getBooks();
    res.send(JSON.stringify(booksdata, null, 4));
  } catch(error) {
    res.status(500).json({message: "Error fetching books"});
  }
});

// Task 11: Search by ISBN using Promises
public_users.get('/async/isbn/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  getByISBN(isbn)
  .then(
    result => res.send(result),
    error => res.status(error.status).json({message: error.message})
  );
});

// Task 12: Search by Author using async/await
public_users.get('/async/author/:author',async function (req, res) {
  try {
    const author = req.params.author;
    const booksbyauthor = await getByAuthor(author)
    res.send(JSON.stringify({booksbyauthor}, null, 4));
  } catch(error) {
    res.status(500).json({message: "Error fetching books by author"});
  }
});

// Task 13: Search by Title using Promises
public_users.get('/async/title/:title',function (req, res) {
  const title = req.params.title;
  getByTitle(title)
  .then(
    result => res.send(JSON.stringify({booksbytitle: result}, null, 4)),
    error => res.status(500).json({message: "Error fetching books by title"})
  );
});

module.exports.general = public_users;
