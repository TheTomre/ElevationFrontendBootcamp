import express from 'express';
import { books, authors } from './storage.js';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from books-api!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/books', (req, res) => {
  const includeAuthor = req.query.includeAuthor === 'true';

  if (includeAuthor) {
    const booksWithAuthors = books.map(book => {
      const author = authors.find(author => author.id === book.authorId);
      return { ...book, author };
    });
    res.json(booksWithAuthors);
  } else {
    res.json(books);
  }
});

app.get('/books/:id', (req, res) => {
  const id = req.params.id;
  const book = books.find(book => book.id === id);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

app.post('/books', (req, res) => {
  const { name, price, authorId } = req.body;

  if (!name || !price || !authorId) {
    res.status(400).json({ error: 'Please provide name, price and authorId' });
    return;
  }

  const author = authors.find(author => author.id === authorId);

  if (!author) {
    res.status(404).json({ error: 'Author not found' });
    return;
  }

  const book = { id: uuidv4(), name, price, authorId };
  books.push(book);
  res.status(201).json(book);
});

app.put('/books/:id', (req, res) => {
  const id = req.params.id;
  const book = books.find(book => book.id === id);

  if (!book) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }

  const { name, price, authorId } = req.body;

  if (!name || !price || !authorId) {
    res.status(400).json({ error: 'Please provide name, price and authorId' });
    return;
  }

  const author = authors.find(author => author.id === authorId);

  if (!author) {
    res.status(404).json({ error: 'Author not found' });
    return;
  }

  book.name = name;
  book.price = price;
  book.authorId = authorId;

  res.json(book);
});

app.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  const index = books.findIndex(book => book.id === id);

  if (index !== -1) {
    books.splice(index, 1);
  }

  res.status(204).send();
});








