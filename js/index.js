const books = [
  {
    title: "abc",
    author: "Aijaz",
  },
  {
    title: "def",
    author: "Riyaz",
  },
  {
    title: "ghi",
    author: "Pervez",
  },
];

const showBookList = (book) => {
  const booksDiv = document.getElementById("list");
  const div = document.createElement("div");
  div.setAttribute("class", "book-info");
  div.setAttribute("id", "book-info");
  booksDiv.append(div);
  const title = document.createElement("h5");
  title.setAttribute("class", "title");
  title.innerHTML = book.title;
  div.append(title);
  const author = document.createElement("p");
  author.setAttribute("class", "author");
  author.innerHTML = book.author;
  div.append(author);
  const button = document.createElement("button");
  button.setAttribute("class", "removebook");
  button.addEventListener("click", (e) => {
    const sectionName = document.getElementById("book-info");
    sectionName.remove();
  });
  button.innerHTML = "Remove";
  div.append(button);
};

books.forEach((book) => showBookList(book));
