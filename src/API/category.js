import axios from 'axios';
import { deleteBook } from './Books'
const backendUrl = 'http://localhost:3000';

export async function addCategory(category) {
    try {
        await (axios.post(`${backendUrl}/api/categories/`, {
            'name': category.name
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            }));
    }
    catch (e) {
        return e;
    }
}

export async function getCategories() {
    try {
        const categories = await (axios.get(`${backendUrl}/api/categories`));
        const data = categories.data;
        return data;
    }
    catch (e) {
        return e;
    }
}

export async function getCategorybyId(id) {
    try {
        const categories = await (axios.get(`${backendUrl}/api/categories/${id}`));
        const data = categories.data;
        return data;
    }
    catch (e) {
        return e;
    }
}

export async function updateCategory(id, category) {
    try {
        await axios.patch(`${backendUrl}/api/categories/${id}`, category);
    }
    catch (e) {
        return e;
    }
}

export async function deleteCategory(id) {
    try {
        const categories = await getCategorybyId(id)
        const books = categories.books
            books.map(async (book) => {
            await deleteBook(book._id);
        })
        await axios.delete(`${backendUrl}/api/categories/${id}`);
    }
    catch (e) {
        return e;
    }
}