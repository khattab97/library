let btn = document.getElementById("open-modal");
let modal = document.querySelector(".modal");
let form = document.getElementById("book-input");
let form_btn = form.elements[form.length - 1];
const myBooks = [];
let books_grid = document.querySelector(".books-grid");

btn.addEventListener("click", () => (modal.style.display = "flex"));
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

form_btn.addEventListener("click", getInfo);

function createBook(title, author, pages, read, req) {
  let book = new Book(title, author, pages, read);
  myBooks.push(book);
  modal.style.display = "none";
  req.style.visibility = "hidden";
  form.reset();
  console.log(myBooks);
  display(book, myBooks.indexOf(book));
}

function getInfo() {
  let title = form[0].value;
  let author = form[1].value;
  let pages = form[2].value;
  let read = form[3].checked;
  let req = document.querySelector(".requirements");

  if (title === "" || author === "" || pages === "") {
    req.style.visibility = "visible";
  } else createBook(title, author, pages, read, req);
}

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function display(book, i) {
  let div = document.createElement("div");
  let p_title = document.createElement("p");
  let p_author = document.createElement("p");
  let p_page = document.createElement("p");
  let btn_read = document.createElement("button");
  let btn_remove = document.createElement("button");

  div.classList.add("book");
  p_title.textContent = book.title;
  p_author.textContent = book.author;
  p_page.textContent = book.page + " pages";

  if (book.read) {
    btn_read.style.cssText =
      "background-color:green; border:1px solid skyblue;";
    btn_read.textContent = "Read";
  } else btn_read.textContent = "Not read";
  btn_read.addEventListener("click", toggle);

  btn_remove.style.backgroundColor = "red";
  btn_remove.textContent = "Remove";
  btn_remove.addEventListener("click", removeDiv);

  div.appendChild(p_title);
  div.appendChild(p_author);
  div.appendChild(p_page);
  div.appendChild(btn_read);
  div.appendChild(btn_remove);
  div.setAttribute("data-key", i);
  books_grid.appendChild(div);
}

function removeDiv() {
  let index = this.parentElement.getAttribute("data-key");
  console.log(index);
  myBooks.splice(+index, 1);
  console.log(myBooks);
  this.parentElement.remove();
}

function toggle() {
  if (this.textContent === "Read") {
    this.textContent = "Not read";
    this.style.backgroundColor = "black";
  } else {
    this.textContent = "Read";
    this.style.backgroundColor = "green";
    this.style.border = "1px solid skyblue";
  }
}
