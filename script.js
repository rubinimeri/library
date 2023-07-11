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

function addBookToLibrary() {
    const book = new Book(prompt("Title?"), prompt("Author"), parseInt(prompt("Pages?")), prompt("Have you read it? true/false"));
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

