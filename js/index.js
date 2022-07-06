
const books = [{}] ;

class Books {
    
    constructor(id, title, author) {
     this.id = id;
     this.title = title;
     this.author = author;
    }

    addBook(book) {
        const booksDiv = document.getElementById('list');
        const div = document.createElement('div');
        div.setAttribute('class', 'book-info');
        div.setAttribute('id', 'book-info');
        booksDiv.append(div)
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
        button.addEventListener('click', (e) =>
        {  
            e.stopPropagation();
           const element =document.getElementById('book-info');
           element.remove();
        });
        button.innerHTML = 'Remove';
        div.append(button);
    }
}

const showBookList = (book) => {
   
}

const title = document.getElementById('title');
const author = document.getElementById('author');
let id = 1 , bookname='', authorname='';
function validateFields() {
  bookname = title.value;
  authorname = author.value;
  if(bookname === '' || authorname === '')
  return false;
  else 
  return true;
}

form1.addEventListener('submit', (e) => {
    e.preventDefault();
     if(validateFields())
    {
       let book = new Books(id ,bookname , authorname);
       books.push(book);
       book.addBook(book);
       console.log(books);
       id = id + 1;
    }
    books.forEach((book)=>showBookList(book));
})


var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date+' '+time;

document.querySelector('.date-text').innerHTML = dateTime;
