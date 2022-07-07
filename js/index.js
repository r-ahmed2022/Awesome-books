/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const storedList = JSON.parse(localStorage.getItem('books') || []);
function validateFields() {
if (document.getElementById('title').value === '' || document.getElementById('author').value === '') {
    return false;
}
    return true;
  }

class Books {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

   booklist = [];

   addBook() {
    if (validateFields()) {
         const bookname = document.getElementById('title').value;
         const authorname = document.getElementById('author').value;
         // eslint-disable-next-line max-len
         this.booklist.push({ title: bookname, author: authorname });
         storedList.setItem('books', JSON.stringify(this.booklist));
                   }
       document.getElementById('title').value = '';
       document.getElementById('author').value = '';
       }
}
const book = new Books();

document.getElementById('addbook').addEventListener('click', () => {
    book.addBook();
 });

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line consistent-return
function remove(e) {
    const newList = book.booklist.filter((element) => e.target.parentElement !== element);
    localStorage.setItem('books', JSON.stringify(newList));
    e.target.parentElement.remove();
  }

function showBookList() {
    if (storedList !== null) {
    storedList.forEach((element) => {
      const booksDiv = document.getElementById('list');
      const div = document.createElement('div');
      div.setAttribute('class', 'book-info');
      div.setAttribute('id', 'book-info');
      booksDiv.append(div);
      const title = document.createElement('h5');
      title.setAttribute('class', 'title');
      title.innerHTML = element.title;
      div.append(title);
      const author = document.createElement('p');
      author.setAttribute('class', 'author');
      author.innerHTML = element.author;
      div.append(author);
      const button = document.createElement('button');
      button.setAttribute('class', 'removebook');
      button.addEventListener('click', (e) => {
             remove(e);
      });
      button.innerHTML = 'Remove';
      div.append(button);
    });
  } else {
    alert('Empty list, please add books');
  }
}

document.addEventListener('DOMContentLoaded', () => {
        showBookList();
});

const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

const dateTime = `${date} ${time}`;

document.querySelector('.date-text').innerHTML = dateTime;
