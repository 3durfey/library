let arrayOfBooks = [];

class Book {
  constructor(title, author, read, pages) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.pages = pages;
    this.info = function () {
      return title + ", " + author + ", " + read + ", " + pages;
    };
  }
}

//add book to array
function addBookToArray() {
  //add book to array
  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let numPages = document.getElementById("numPages").value;
  if (author === "" || title === "" || numPages === "") {
    return;
  }
  let book = new Book(title, author, false, numPages);
  arrayOfBooks.push(book);
  console.log(arrayOfBooks);
  //create book in DOM
  let library = document.getElementById("libraryContainer");
  const bookDiv = document.createElement("div");
  bookDiv.className = "book";
  title = document.createElement("h1");
  author = document.createElement("h3");
  const pages = document.createElement("h3");
  const deleteBtn = document.createElement("button");
  const readBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  readBtn.innerHTML = "Mark As Read";
  deleteBtn.onclick = function () {
    this.parentNode.remove();
  };
  readBtn.innerHTML = "Mark as Read";
  title.innerHTML = book.title;
  author.innerHTML = "By: " + book.author;
  pages.innerHTML = "Pages: " + book.pages;
  bookDiv.appendChild(title);
  bookDiv.appendChild(author);
  bookDiv.appendChild(pages);
  bookDiv.appendChild(deleteBtn);
  bookDiv.appendChild(readBtn);
  library.appendChild(bookDiv);
  //functions to toggle if book has been read or not
  readBtn.addEventListener("click", function handleClick() {
    function arrayName(book) {
      return book.title === h1Tag[0].innerHTML;
    }
    const h1Tag = this.parentNode.getElementsByTagName("h1");
    const currentBook = arrayOfBooks.find(arrayName);
    if (this.textContent === "Unmark As Read") {
      this.textContent = "Mark As Read";
      this.parentNode.style.backgroundColor = "rgba(255, 0, 0, 0.486)";
      currentBook.read = false;
    } else {
      this.textContent = "Unmark As Read";
      this.parentNode.style.backgroundColor = "green";
      currentBook.read = true;
    }
  });
}
//open book entry form
let addBook = document.getElementById("addBookId");
function openAddBook() {
  addBook.classList.add("addBook-open");
  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("numPages").value = "";
}
//close book entry form
function addBookClosePopup() {
  addBook.classList.remove("addBook-open");
}
