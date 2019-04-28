import axios from 'axios';

const backendUrl = 'http://localhost:3000';

export async function addBook(book) {
    try {
        await (axios.post(`${backendUrl}/api/books/`, book)
            .then()
            .catch(function (error) {
                console.log(error);
            }));
    }
    catch (e) {
        return e;
    }
}

export async function getBooks() {
    try {
        const books = await (axios.get(`${backendUrl}/api/books`));
        const data = books.data;
        return data;
    }
    catch (e) {
        return e;
    }
}

export async function getBookbyId(id) {
    try {
        const book = await (axios.get(`${backendUrl}/api/books/${id}`));
        const data = book.data;
        return data;
    }
    catch (e) {
        return e;
    }
}

export async function updateBook(id, book) {
    try {
        await axios.patch(`${backendUrl}/api/books/${id}`, book);
    }
    catch (e) {
        return e;
    }
}

export async function deleteBook(id) {
    try {
        await axios.delete(`${backendUrl}/api/books/${id}`);
    }
    catch (e) {
        return e;
    }
}