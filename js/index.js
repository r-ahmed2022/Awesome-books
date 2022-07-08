/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
class Books {
    booklist = [];

    addBooks() {
      const name = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      this.booklist.push({ title: name, author });
      localStorage.setItem('books', JSON.stringify(this.booklist));
      history.back();
      location.reload();
    }

    deleteBook(i) {
      // eslint-disable-next-line no-use-before-define
      this.booklist.splice(i, 1);
      localStorage.setItem('books', JSON.stringify(this.booklist));
      location.reload();
    }
}
const book = new Books();

function showBookList() {
  let html = '<div>';
  html += '<table class="center">';
  const storedBook = JSON.parse(localStorage.getItem('books'));
  for (let i = 0; i < storedBook.length; i += 1) {
    book.booklist.push({ title: storedBook[i].title, author: storedBook[i].author });
    html += '<tr class="rows">';
    html += `<td> "${book.booklist[i].title}" by ${book.booklist[i].author}</td>`;
    html += `<td class="test"><button class="remove-btn" onclick="book.deleteBook(${i})"> Remove </button> </td>`;
    html += '</tr>';
    document.getElementById('list').innerHTML = html;
  }
  html += '</table>';
}

const button = document.getElementById('addbook');

button.addEventListener('click', () => {
  book.addBooks();
});

document.addEventListener('DOMContentLoaded', () => {
  showBookList();
});
