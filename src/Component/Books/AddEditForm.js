import React, { Component } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { addBook, updateBook } from '../../API/Books';

class AddEditBookForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.saveBook = this.saveBook.bind(this);

    this.state = {
      show: this.props.show,
      newBook: this.props.newBook,
      categories: this.props.categories,
      authors: this.props.authors,
      currentBook: this.props.book,
      books: this.props.books,
      validated: false
    };
  }

  handleClose() {
    this.setState(
      {
        currentBook: {
          _id: null,
          title: "",
          description: "",
          cover: "",
          categoryID: "",
          authorID: ""
        },
        show: false,
        validated: false
      },
      () => {
        this.props.handleClose(this.state.books);
      }
    );
  }

  handlechange(e) {
    e.persist();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      validated: true,
      newBook: false,
      currentBook: { ...this.state.currentBook, [name]: value }
    });
  }

  async saveBook(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { _id } = this.state.currentBook;
    let invalid = false;
    if (_id === null) {
      this.state.books.map(bk => {
        if (this.state.currentBook.title === bk.title) {
          invalid = true;
          return bk;
        } else return "";
      });
      if (!invalid && !(this.state.currentBook.title === "" || this.state.currentBook.image === "")) {
        await addBook(this.state.currentBook)
      }
    } else {
      await updateBook(this.state.currentBook._id, this.state.currentBook)
    }
    if (form.checkValidity() === false || invalid) {
      event.stopPropagation();
    } else {
      this.handleClose();
    }
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="book-form" onSubmit={this.saveBook} noValidate validated={this.state.validated}>
            <Form.Group as={Row} controlId="addBook">
              <Form.Label column sm="3">Book Title</Form.Label>
              <Col sm="9">
                <Form.Control required type="text" placeholder="Add Book Title" onChange={this.handlechange} name="title" value={this.state.newBook ? "" : this.state.currentBook.title} />
                <Form.Control.Feedback type="invalid">Invalid Book Name</Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="addBook">
              <Form.Label column sm="3">Description</Form.Label>
              <Col sm="9">
                <Form.Control required as="textarea" placeholder="Add Book Description" onChange={this.handlechange} name="description" value={this.state.newBook ? "" : this.state.currentBook.description} />
                <Form.Control.Feedback type="invalid">Invalid Book Description</Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="selectCategory">
              <Form.Label column sm="3">Category</Form.Label>
              <Col sm="9">
                <Form.Control as="select" name="categoryID" onChange={this.handlechange} value={this.state.newBook ? this.state.categories[0]._id : this.state.currentBook.categoryID._id}>
                  {this.state.categories.map(category => (<option key={category._id} value={category._id}> {category.name}</option>))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="selectAuthor">
              <Form.Label column sm="3">Author</Form.Label>
              <Col sm="9">
                <Form.Control as="select" name="authorID" onChange={this.handlechange} value={this.state.newBook ? this.state.authors[0]._id : this.state.currentBook.authorID._id}>
                  {this.state.authors.map(author => (<option key={author._id} value={author._id}>{author.name}</option>))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="BookCover">
              <Form.Label column sm="3">Book Cover:</Form.Label>
              <Col sm="9">
                <Form.Control required type="text" placeholder="Add Book Cover" onChange={this.handlechange} name="cover" value={this.state.newBook ? "" : this.state.currentBook.cover} />
                <Form.Control.Feedback type="invalid"> Invalid Image </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Col sm={{ span: 4, offset: 4 }}><Button variant="primary" type="submit"> Add </Button></Col>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default AddEditBookForm;
