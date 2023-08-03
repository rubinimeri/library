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
const title = document.getElementById("title")
const author = document.getElementById("author")
const pages = document.getElementById("pages");
const body = document.querySelector("body")
const submitButton = document.querySelector("form button");
const cardButtons = [];
const toggleButtons = [];


addBook.addEventListener("click", () => {
    form.style.display = "flex";
    addBook.disabled = true;
})

const setError = (input, span, message) => {
    input.classList.remove("success");
    input.classList.add("error");
    span.innerText = message;
    submitButton.disabled = true;
}
const setSuccess = (input, span) => {
    input.classList.remove("error");
    input.classList.add("success");
    span.innerText = "";
    submitButton.disabled = false;
}

title.addEventListener("input", () => {
    const container = title.parentElement;
    const span = container.querySelector("span");
    if(title.value === "") {
        setError(title, span, "Title is required");
    }
    else {
        setSuccess(title, span);
    }
});

author.addEventListener("input", () => {
    const container = author.parentElement;
    const span = container.querySelector("span");
    if(author.value === "") {
        setError(author, span, "Author is required");
    }
    else {
        setSuccess(author, span);
    }
})

pages.addEventListener("input", () => {
    const container = pages.parentElement;
    const span = container.querySelector("span");
    if(pages.value === "") {
        setError(pages, span, "Pages are required");
    }
    else if(pages.value == 0 || pages.value < 0) {
        setError(pages, span, "Pages must be bigger than 0")
    }
    else {
        setSuccess(pages, span);
    }
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

