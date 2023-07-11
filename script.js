function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        if(read === true)
            return title + " by " + author + ", " + pages + " pages, " + "read";
        return title + " by " + author + ", " + pages + " pages, " + "not read yet";
    }
}

let myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    const bookContainer = document.querySelector(".main");

    const card = document.createElement("div");
    bookContainer.appendChild(card);

    const ul = document.createElement("ul");
    card.appendChild(ul);

    for (const property in book) {
        const li = document.createElement("li");
        if(!(property === "info")){
            li.textContent = book[property];
            ul.appendChild(li);
        }
    }
    myLibrary.push(book);
}

const addBook = document.querySelector(".add-book");
const form = document.querySelector("form");
const body = document.querySelector("body")

addBook.addEventListener("click", () => {
    form.style.display = "flex";
    addBook.disabled = true;
})

form.addEventListener("submit", () => {
    event.preventDefault();
    addBookToLibrary(document.querySelector("#title").value, document.querySelector("#author").value, document.querySelector("#pages").value, document.querySelector("#read").value);
    form.style.display = "none"
    addBook.disabled = false;
})

