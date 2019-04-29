import axios from 'axios';
import { deleteBook } from './Books';

const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';

export async function addAuthor(author) {
    try {
        await (axios.post(`${backendUrl}/api/authors/`, author)
            .then()
            .catch(function (error) {
                console.log(error);
            }));
    }
    catch (e) {
        return e;
    }
}

export async function getAuthors() {
    try {
        const authors = await (axios.get(`${backendUrl}/api/authors`));
        const data = authors.data;
        return data;
    }
    catch (e) {
        return e;
    }
}

export async function getAuthorbyId(id) {
    try {
        const author = await (axios.get(`${backendUrl}/api/authors/${id}`));
        const data = author.data;
        return data;
    }
    catch (e) {
        return e;
    }
}

export async function updateAuthor(id, author) {
    try {
        await axios.patch(`${backendUrl}/api/authors/${id}`, author);
    }
    catch (e) {
        return e;
    }
}

export async function deleteAuthor(id) {
    try {
        const authors = await getAuthorbyId(id);
        const books = authors.books
        books.map(async (book) => {
            await deleteBook(book._id);
        })
        await axios.delete(`${backendUrl}/api/authors/${id}`);
    }
    catch (e) {
        return e;
    }
}
