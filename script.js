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
    myLibrary.push(new Book(prompt("Title?"), prompt("Author"), parseInt(prompt("Pages?")), prompt("Have you read it? true/false")))
}

addBookToLibrary()