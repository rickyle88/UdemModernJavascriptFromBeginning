// ES6

//  The purpose of Book constructor is to handle books item and not to handle UI.
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//////////////////////////////////////////////////////
class UI {
    addBookToList(book) {
        //              <tr>
        //                 <td>1</td>
        //                 <td>1</td>
        //                 <td>1</td>
        //                 <td>1</td>
        //             </tr>

        // Element from table's body
        const list = document.getElementById('book-list');

        // Create tr element
        const row = document.createElement('tr');

        // Insert cols
        row.innerHTML = `
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a href="#" class="delete">X</a></td>
                        `;

        list.appendChild(row);
    }

    showAlert(message, className) {
        // Only show message 1 time
        if (!document.querySelector(`.alert.${className}`)) {
            // Create div tag
            const div = document.createElement('div');
            // Add class
            div.className = `alert ${className}`;

            // Add text
            div.appendChild(document.createTextNode(message));

            console.log("Add element");

            // We want to insert div - message before the form in container

            // Get parent container
            const container = document.querySelector('.container');

            // Get form
            const form = document.querySelector('#book-form');

            // Insert div-alert before form
            container.insertBefore(div, form);

            // Timeout after 3 seconds
            setTimeout(function () {
                document.querySelector('.alert').remove();
            }, 3000);
        }
    }

    // <tr>
    //                     <td>dSdfs</td>
    //                     <td>FWE</td>
    //                     <td>DFRR</td>
    //                     <td>
    //                       <a href="#" class="delete">X</a>
    //                      </td>
    // </tr>

    deleteBook(target) {
        if (target.className === 'delete') {
            // Delete row: a > td > tr
            target.parentElement.parentElement.remove();
            // // Show message
            // UI.showAlert('Book removed', 'success');
            // this.showAlert('Book removed.', 'success');
            // 
            return true;
        }

        return false;

    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

///////////////////////////////////////////////////////
// Local Storage class
class Store {

    // Get/fetch all books from local Storage 
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    // Display books in the UI
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(book => {
            const ui = new UI();

            // Add book to UI
            ui.addBookToList(book);
        });

    }


    // Add book to local Storage
    static addBook(book) {
        // const books = Store.getBooks();
        const books = this.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    // Remove book
    static removeBook(isbn) {
        // console.log(isbn);
        const books = Store.getBooks();

        books.forEach(function (book, index) {
            if (isbn === book.isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}


///////////////////////////////////////////////////////

// DOM load event to load all books from Local Storage
document.addEventListener('DOMContentLoaded', Store.displayBooks());


// Event listener for FORM - Add new book
document.getElementById('book-form').addEventListener('submit', function (e) {

    // Get form value
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    // Instantiate book's object
    const book = new Book(title, author, isbn);
    // View in Chrome's console
    // console.log(book);

    // Instantiate UI
    const ui = new UI();

    // Now we can see all UI's Prototype in Chrome's console
    console.log(ui);

    // Validate title, author and isbn before adding to list
    if (title === '' || author === '' || isbn === '') {
        // alert('Failed, please enter information');

        // Error alert
        ui.showAlert('Please fill in all fields', 'error');


    } else {
        // Add book to UL list
        ui.addBookToList(book);

        // Add to Local Storage
        Store.addBook(book);

        // Show success
        ui.showAlert('Book added', 'success');

        // Clear input's value 
        ui.clearFields();

    }

    e.preventDefault();
});

// Delete a book - Event listener 
// Delegation
document.getElementById('book-list').addEventListener('click', function (e) {

    ///////////////////////////////////////////////////////
    // When clicking on a <td> its parent is <tr>. There is no previousElementSibling for first <tr>.


    // Uncaught TypeError: Cannot read property 'textContent' of undefined at HTMLTableSectionElement.document.querySelector.addEventListener
    ///////////////////////////////////////////////////////

    if (e.target.className === 'delete') {

        // Get a element - X icon
        // console.log(e);
        // ui.deleteBook(e);

        // Instantiate new UI
        const ui = new UI();

        /////////////////////////////////////

        // <tr>
        //     <td>${book.title}</td>
        //     <td>${book.author}</td>
        //     <td>${book.isbn}</td>
        //     <td>
        //            <a href="#" class="delete">X</a>
        //       </td>
        // </tr>

        // e.target is <a> element
        // We want to delete using ISBN element

        const isbnToBeRemoved = e.target.parentElement.previousElementSibling.textContent;

        // Delete book from UL
        if (ui.deleteBook(e.target)) {
            // Show message
            ui.showAlert('Book removed', 'success');
        }

        // Delete from Local Storage
        Store.removeBook(isbnToBeRemoved);

    }

    ///////////////////////////////////////////

    e.preventDefault();
});