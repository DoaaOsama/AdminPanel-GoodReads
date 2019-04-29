import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { getBooks, deleteBook } from '../../API/Books';
import { getCategories } from "../../API/category";
import { getAuthors } from "../../API/Authors";

import AddEditBookForm from "./AddEditForm";

class BookAdmin extends Component {
  constructor(props) {
    super(props);

    this.bookform = this.bookform.bind(this);
    this.deleteBook = this.deleteBook.bind(this);

    this.state = {
      categories: [],
      authors: [],
      newBook: false,
      book: {},
      show: false,
      books: []
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    const books = await getBooks();
    const authors = await getAuthors();
    this.setState({
      categories: categories,
      authors: authors,
      books: books
    }, () => console.log(this.state.books));

  }

  handleClose = async () => {
    this.setState({
      show: false,
      books: await getBooks()
    });
  };

  bookform(formType, book) {
    this.setState(
      {
        newBook: formType,
        book: book,
        show: true
      });
  }

  async deleteBook(bookId) {
    await deleteBook(bookId);
    this.setState({ books: await getBooks() });
  }

  render() {
    return (
      <>
        <Table hover>
          <thead>
            <tr>
              <th
                style={{ position: "absolute", right: "0rem", fontSize: "20px" }}>
                <i className="fas fa-plus-circle" onClick={() => this.bookform(true, { _id: null, title: "", description: "", cover: "", categoryID: { _id: "" }, authorID: { _id: "" } })} />
              </th>
            </tr>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Author Name</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.books.map(book => {
              return (
                <tr key={book._id}>
                  <td><img src={book.cover} style={{ width: "100px", height: "150px" }} alt={book.name} /></td>
                  <td>{book.title}</td>
                  <td>{book.description}</td>
                  <td>{book.categoryID.name}</td>
                  <td>{book.authorID.name}</td>
                  <td>
                    <div className="tdFlex">
                      <i className="fas fa-pen" onClick={() => this.bookform(false, book)} />
                      <i className="fas fa-eraser" onClick={() => this.deleteBook(book._id)} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {this.state.show && (
          <AddEditBookForm newBook={this.state.newBook} book={this.state.book} show={this.state.show} categories={this.state.categories} authors={this.state.authors} handleClose={this.handleClose} books={this.state.books} />
        )}
      </>
    );
  }
}
export default BookAdmin;
