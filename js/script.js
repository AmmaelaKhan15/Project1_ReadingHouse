/*
I started by calling and adding all the needed IDs from my HTML
and saving them as variables so that I can use them later in my code.
*/

// For the buttons
const readingBtn = document.getElementById("readingBtn");
const ToBeReadBtn = document.getElementById("ToBeReadBtn");
const readBtn = document.getElementById("readBtn");

// For the form
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const form = document.getElementById("form");

// For the different sections with hidden and active elements
const readingTab = document.getElementById("readingTab");
const ToBeReadTab = document.getElementById("ToBeReadTab");
const readTab = document.getElementById("readTab");

/* Loads the saved books from localStorage, as done in Workshop 5. I used what I learned
 about localStorage in Workshop 5 and applied it to this project so the books could stay saved after refreshing. */

let books = JSON.parse(localStorage.getItem("myBooks")) || [];

// Saves the books to localStorage so they are still there after refreshing.
function saveBooks() {
    localStorage.setItem("myBooks", JSON.stringify(books));
}

/*
I created this function to control which tab is visible.
It hides all three sections first and then shows the selected one.
This avoids having more than one tab visible at the same time.
*/
function showTab(activeTab) {
    readingTab.classList.add("hidden");
    ToBeReadTab.classList.add("hidden");
    readTab.classList.add("hidden");

    activeTab.classList.remove("hidden");
}

/*
This function displays the books stored in the books array.
I first remove the existing book elements to prevent
duplicates when the list is updated.

Initially, I had a form function but was not using an array
to organize the books. I used ChatGPT to understand how an
array of book objects could help me manage multiple books
and their reading statuses. I then applied this approach
to my existing code.

I was already familiar with creating HTML elements,
including divs, headings, paragraphs, and buttons, from
previous workshops. The array helped me organize the book
information and display each book using the same function.
*/
function displayBooks() {
    document.querySelectorAll(".book").forEach(function(book) {
        book.remove();
    });

    // This goes through each book saved in the array.
    books.forEach(function(bookData, index) {

        // Creates a separate HTML div for each book.
        const book = document.createElement("div");
        book.classList.add("book");

        // Creates the heading for the book title.
        const titleHeading = document.createElement("h4");
        titleHeading.textContent = bookData.title;

        // Creates a paragraph to display the author's name.
        const authorParagraph = document.createElement("p");
        authorParagraph.textContent = "By: " + bookData.author;

        // Creates a container for the title and author's name.
        const bookInfo = document.createElement("div");
        bookInfo.classList.add("book-info");
        bookInfo.appendChild(titleHeading);
        bookInfo.appendChild(authorParagraph);

        /*
        I created another div called bookContent to hold the book
        information and its buttons because I ran into some issues
        with styling and layout.
        */
        const bookContent = document.createElement("div");
        bookContent.classList.add("book-content");
        bookContent.appendChild(bookInfo);

        /*
        If the book is still in To Be Read, this creates a
        Start Reading button so the user can move it to Reading.
        */
        if (bookData.status === "tbr") {
            const startBtn = document.createElement("button");
            startBtn.textContent = "Start Reading";
            startBtn.type = "button";

            startBtn.addEventListener("click", function() {
                books[index].status = "reading";
                saveBooks();
                displayBooks();
                showTab(readingTab);
            });

            bookContent.appendChild(startBtn);
        }

        /*
        If the book is currently being read, this creates a
        checkmark button to move it into the Read section.
        */
        if (bookData.status === "reading") {
            const finishBtn = document.createElement("button");
            finishBtn.textContent = "✓";
            finishBtn.classList.add("finish-btn");
            finishBtn.title = "Mark as read";
            finishBtn.type = "button";

            finishBtn.addEventListener("click", function() {
                books[index].status = "read";
                saveBooks();
                displayBooks();
                showTab(readTab);
            });

            bookContent.insertBefore(finishBtn, bookInfo);
        }

        // Creates a Delete button to remove the book from the list.
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.type = "button";

        deleteBtn.addEventListener("click", function() {
            books.splice(index, 1);
            saveBooks();
            displayBooks();
        });

        // Adds the Delete button to the book container.
        bookContent.appendChild(deleteBtn);
        book.appendChild(bookContent);

        /*
        This checks the book's status and places it in the
        correct section of the page.
        */
        if (bookData.status === "tbr") {
            ToBeReadTab.appendChild(book);
        } else if (bookData.status === "reading") {
            readingTab.appendChild(book);
        } else if (bookData.status === "read") {
            readTab.appendChild(book);
        }
    });
}

/*
The form EventListener tells JavaScript to listen for the user
submitting the form. I learned the basic idea of handling form
information from Task 4 in Workshop 4, where we worked with
location, animal, and date information.
*/
form.addEventListener("submit", function(event) {

    // Prevents the browser from reloading the page when the form is submitted.
    event.preventDefault();

    /*
    These variables store the book title and author's name.
    trim() removes unnecessary spaces from the beginning and end.
    */
    const title = bookTitle.value.trim();
    const author = bookAuthor.value.trim();

    // Checks if the user has left either field empty.
    if (title === "" || author === "") {
        alert("Please enter both the book title and author!");
        return;
    }

    /*
    I wanted to highlight invalid input with a red border, so I asked
    Gemini how I could do this. The first response included more code
    than I needed, so I tried to understand the suggestions and adapt
    them to my existing code instead of copying everything directly.

    I used the is-invalid CSS class and checked the title and author
    separately. I also added else statements so the red border would
    disappear when the user corrected the input.
    */
    let isInvalid = false;

    // Checks that the title contains at least two characters.
    if (title.length < 2) {
        bookTitle.classList.add("is-invalid");
        isInvalid = true;
    } else {
        bookTitle.classList.remove("is-invalid");
    }

    // Checks that the author's name contains at least two characters.
    if (author.length < 2) {
        bookAuthor.classList.add("is-invalid");
        isInvalid = true;
    } else {
        bookAuthor.classList.remove("is-invalid");
    }

    // Shows an alert if either field does not meet the requirements.
    if (isInvalid) {
        alert("Please add a proper title and author name (at least 2 characters).");
        return;
    }

    // Creates a new book object with its title, author, and starting status.
    const newBook = {
        title: title,
        author: author,
        status: "tbr"
    };

    // Adds the new book to the array and saves the updated list.
    books.push(newBook);
    saveBooks();

    // Displays the updated list and shows the To Be Read tab.
    displayBooks();
    showTab(ToBeReadTab);

    // Clears the form so the user can add another book.
    form.reset();
});

/*
These event listeners control which section appears when a tab
button is clicked. I used the showTab function so I don't have
to repeat the same hide-and-show code for every button.
*/
readingBtn.addEventListener("click", function() {
    showTab(readingTab);
});

ToBeReadBtn.addEventListener("click", function() {
    showTab(ToBeReadTab);
});

readBtn.addEventListener("click", function() {
    showTab(readTab);
});

/*
This loads and displays any books that were already saved
when the page is opened again. It also starts on the To Be Read tab.
*/
displayBooks();
showTab(ToBeReadTab);
