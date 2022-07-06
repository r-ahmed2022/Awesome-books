const books = [{}];

class Books {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  // eslint-disable-next-line no-unused-vars
  addBook(book) {
    const booksDiv = document.getElementById('list');
    const div = document.createElement('div');
    div.setAttribute('class', 'book-info');
    div.setAttribute('id', 'book-info');
    booksDiv.append(div);
    const title = document.createElement('h5');
    title.setAttribute('class', 'title');
    title.innerHTML = this.title;
    div.append(title);
    const author = document.createElement('p');
    author.setAttribute('class', 'author');
    author.innerHTML = this.author;
    div.append(author);
    const button = document.createElement('button');
    button.setAttribute('class', 'removebook');
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const element = document.getElementById('book-info');
      element.remove();
    });
    button.innerHTML = 'Remove';
    div.append(button);
  }
}

const title = document.getElementById('title');
const author = document.getElementById('author');
let id = 1;
let bookname = '';
let authorname = '';
function validateFields() {
  bookname = title.value;
  authorname = author.value;
  if (bookname === '' || authorname === '') { return false; }
  return true;
}

document.getElementById('form1').addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateFields()) {
    const book = new Books(id, bookname, authorname);
    books.push(book);
    book.addBook(book);
    id += 1;
  }
//  books.forEach((book) => showBookList(book));
});

const today = new Date();

const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

const dateTime = `${date} ${time}`;

document.querySelector('.date-text').innerHTML = dateTime;
