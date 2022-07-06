class Books {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

     static books = [{}];
}
// eslint-disable-next-line no-unused-vars
const showBookList = () => {
  const storedList = JSON.parse(localStorage.getItem('book'));
  storedList.forEach((book) => {
    const booksDiv = document.getElementById('list');
    const div = document.createElement('div');
    div.setAttribute('class', 'book-info');
    div.setAttribute('id', 'book-info');
    booksDiv.append(div);
    const title = document.createElement('h5');
    title.setAttribute('class', 'title');
    title.innerHTML = book.title;
    div.append(title);
    const author = document.createElement('p');
    author.setAttribute('class', 'author');
    author.innerHTML = book.author;
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
  });
};

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
    Books.books.push(book);
    localStorage.setItem('book', JSON.stringify(Books.books));
    id += 1;
  }
  title.value = '';
  author.value = '';
});

const today = new Date();

const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

const dateTime = `${date} ${time}`;

document.querySelector('.date-text').innerHTML = dateTime;
