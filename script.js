class Book {
    constructor(title, author, pages, read) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    }
}

let myLibrary = [];
let bookCounter = 0;

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    const bookContainer = document.querySelector(".main");

    const card = document.createElement("div");
    const btn = document.createElement("button");
    btn.textContent = "Remove";

    card.setAttribute("data-index-number", `${bookCounter}`)
    btn.classList.add("card-button");
    btn.setAttribute("data-index-number", `${bookCounter}`)
    bookCounter++;

    bookContainer.appendChild(card);

    const ul = document.createElement("ul");
    card.appendChild(ul);

    for (const property in book) {
        const li = document.createElement("li");
        if(!(property === "info")){
            if(property === "read"){
                if(read.checked === true){
                    const toggle = document.createElement("button");
                    toggle.classList.add("toggle");
                    toggle.textContent = "Read";
                    toggle.style.backgroundColor = "green";
                    li.appendChild(toggle);
                    ul.appendChild(li);
                    toggleButtons.push(toggle);
                }
                else{
                    const toggle = document.createElement("button");
                    toggle.classList.add("toggle");
                    toggle.textContent = "Unread";
                    toggle.style.backgroundColor = "rgb(206, 11, 11)";
                    li.appendChild(toggle);
                    ul.appendChild(li); 
                    toggleButtons.push(toggle);                
                }
            }
            else{
                li.textContent = property.toUpperCase() + ": " + book[property];
                ul.appendChild(li);
            }
            
        }
        ul.appendChild(btn);
    }
    myLibrary.push(book);
    cardButtons.push(btn);

    cardButtons.forEach(button => {
        button.addEventListener("click", () => {
            const divs = Array.from(document.querySelectorAll(".main > div"));
            divs.forEach(div => {
                if(div.getAttribute("data-index-number") === button.getAttribute("data-index-number")){
                    document.querySelector(".main").removeChild(div);
                    bookCounter--;
                }
            });
        })
    });
    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            if(button.textContent === "Read"){
                button.textContent = "Unread";
                button.style.backgroundColor = "rgb(206, 11, 11)"
            }
            else{
                button.textContent = "Read";
                button.style.backgroundColor = "green";
            }
        })
    })
}

const addBook = document.querySelector(".add-book");
const form = document.querySelector("form");
const body = document.querySelector("body")
const cardButtons = [];
const toggleButtons = [];

addBook.addEventListener("click", () => {
    form.style.display = "flex";
    addBook.disabled = true;
})

form.addEventListener("submit", () => {
    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            if(button.textContent === "Read"){
                button.textContent = "Unread";
                button.style.backgroundColor = "rgb(206, 11, 11)"
            }
            else{
                button.textContent = "Read";
                button.style.backgroundColor = "green";
            }
        })
    })
    event.preventDefault();
    addBookToLibrary(document.querySelector("#title").value, document.querySelector("#author").value, document.querySelector("#pages").value, document.querySelector("#read"));
    form.style.display = "none"
    addBook.disabled = false;
    
})

