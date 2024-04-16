import { v4 as uuidv4 } from 'uuid';

export const authors = [
    { id: 1, name: "J.K. Rowling", dateOfBirth: "1965-07-31" },
    { id: 2, name: "George R.R. Martin", dateOfBirth: "1948-09-20" },
    { id: 3, name: "Stephen King", dateOfBirth: "1947-09-21" },
    { id: 4, name: "Neil Gaiman", dateOfBirth: "1960-11-10" },
    { id: 5, name: "Toni Morrison", dateOfBirth: "1931-02-18" }
];


export const books = [
    { id: uuidv4(), name: "Harry Potter and the Sorcerer's Stone", price: 19.99, authorId: 1 },
    { id: uuidv4(), name: "A Game of Thrones", price: 24.99, authorId: 2 },
    { id: uuidv4(), name: "The Shining", price: 18.99, authorId: 3 },
    { id: uuidv4(), name: "Harry Potter and the Chamber of Secrets", price: 20.99, authorId: 1 },
    { id: uuidv4(), name: "American Gods", price: 15.99, authorId: 4 },
    { id: uuidv4(), name: "Neverwhere", price: 14.99, authorId: 4 },
    { id: uuidv4(), name: "Beloved", price: 17.99, authorId: 5 },
    { id: uuidv4(), name: "The Bluest Eye", price: 16.99, authorId: 5 },
    { id: uuidv4(), name: "Carrie", price: 12.99, authorId: 3 },
    { id: uuidv4(), name: "Clash of Kings", price: 22.99, authorId: 2 }
];
