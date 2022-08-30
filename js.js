let btn = document.getElementById('open-modal');
let modal = document.querySelector('.modal');
let form = document.getElementById('book-input');
let form_btn = form.elements[form.length-1]
const myBooks = []
let books_grid = document.querySelector('.books-grid')

btn.addEventListener('click', () => modal.style.display='flex');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

form_btn.addEventListener('click', getInfo)


function getInfo() {
    let title = form[0].value;
    let author = form[1].value;
    let pages = form[2].value;
    let read = form[3].checked;
    let req = document.querySelector('.requirements')

    if (title === ""|| author === "" || pages === "") {
        req.style.visibility = 'visible'
    } else {
        myBooks.push(new Book(title, author, pages,read))
        modal.style.display = "none";
        req.style.visibility = 'hidden'
        form.reset();
        console.log(myBooks)
        display(myBooks)
    }
}


function Book (title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}


function display(books) {
    books.forEach(book => {
        let div = document.createElement('div');
        div.classList.add('book');
        let p_title = document.createElement('p');
        p_title.textContent = book.title;
        let p_author = document.createElement('p');
        p_author.textContent = book.author;
        let p_page = document.createElement('p');
        p_page.textContent = book.page;

        div.appendChild(p_title);
        div.appendChild(p_author);
        div.appendChild(p_page);
        books_grid.appendChild(div);

    });
}