# The Bookery - README
The Bookery is a basic React Router project designed to simulate an online book store where users can browse, view detailed book information, and manage their reading preferences. This includes saving books to a wish list and marking them as "read." The app also includes functionality for persisting data using local storage.

## Features:
Book Listing: View a list of books available for sale.
Book Details: Click on a book to view its detailed information.
Wish List: Save books to a personal wish list for future reference.
Mark as Read: Keep track of books you've already read.
Local Storage: All wish list and read status data is saved to the browser's local storage, ensuring that your preferences are saved even after a page refresh.
Installation
To get started with The Bookery, follow these steps:

## Clone the repository:

bash
Copy
git clone https://github.com/Md-shahien-khan/the-bookery.git
Navigate to the project directory:

bash
Copy
cd the-bookery
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm start
Your app will be available at http://localhost:3000 in your browser.

How it Works
React Router: The app uses React Router to handle navigation between different views (home page, book details, etc.).
Local Storage: Books added to the wish list or marked as read are saved to the browser's local storage. When the user returns to the app, their saved data is retrieved and displayed.
Saving to Local Storage
When a user saves a book to their wish list or marks it as read, we store this information in the local storage using localStorage.setItem() and retrieve it using localStorage.getItem().

## Example for saving books to the wish list:

javascript
Copy
// Adding book to the wish list
const addToWishList = (book) => {
  let wishList = JSON.parse(localStorage.getItem('wishList')) || [];
  wishList.push(book);
  localStorage.setItem('wishList', JSON.stringify(wishList));
};

// Retrieving the wish list
const getWishList = () => {
  return JSON.parse(localStorage.getItem('wishList')) || [];
};
Marking Books as Read
The app also allows users to mark books as read, which is similarly saved in the local storage:

javascript
Copy
// Marking book as read
const markAsRead = (bookId) => {
  let readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
  if (!readBooks.includes(bookId)) {
    readBooks.push(bookId);
    localStorage.setItem('readBooks', JSON.stringify(readBooks));
  }
};

// Checking if a book is marked as read
const isRead = (bookId) => {
  let readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
  return readBooks.includes(bookId);
};
File Structure
bash
Copy
/the-bookery
  /public
    index.html
  /src
    /components
      BookList.js
      BookDetails.js
      WishList.js
      Header.js
    App.js
    index.js
    /styles
      App.css
BookList.js: Displays a list of available books.
BookDetails.js: Displays detailed information for a single book.
WishList.js: Displays a list of books saved to the wish list.
Header.js: Contains the header and navigation elements.
Future Improvements
Add user authentication to save book preferences across devices.
Allow users to remove books from their wish list or mark them as unread.
Enhance book search functionality with filters or categories.
License
This project is licensed under the MIT License - see the LICENSE file for details.
