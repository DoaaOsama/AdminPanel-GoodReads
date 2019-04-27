import React, { Component } from "react";

import { Button, Modal, Form, Row, Col } from "react-bootstrap";

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
          id: Number,
          title: "",
          category: "",
          author: "",
          cover: ""
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

  saveBook(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { id } = this.state.currentBook;
    let invalid = false;
    if (isNaN(id)) {
      this.state.books.map(bk => {
        if (this.state.currentBook.title === bk.title) {
          invalid = true;
          return bk;
        } else return "";
      });

      if (
        !invalid &&
        !(
          this.state.currentBook.title === "" ||
          this.state.currentBook.image === ""
        )
      ) {
        this.setState({
          books: [
            ...this.state.books,
            {
              ...this.state.currentBook,
              id: this.state.books.length + 1,
              category:
                this.state.currentBook.category === ""
                  ? this.state.categories[0].name
                  : this.state.currentBook.category,
              author:
                this.state.currentBook.author === ""
                  ? this.state.authors[0].name
                  : this.state.currentBook.author
            }
          ]
        });
      }
    } else {
      this.state.books.find(book => {
        if (this.state.currentBook.id === book.id) {
          book.title = this.state.currentBook.title;
          book.category = this.state.currentBook.category;
          book.author = this.state.currentBook.author;
          book.cover = this.state.currentBook.cover;
          return true;
        } else return false;
      });
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
          <Form
            className="book-form"
            onSubmit={this.saveBook}
            noValidate
            validated={this.state.validated}
          >
            {/* AddBook */}
            <Form.Group as={Row} controlId="addBook">
              <Form.Label column sm="3">
                Book Title
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  required
                  type="text"
                  placeholder="Add Book Title"
                  onChange={this.handlechange}
                  name="title"
                  value={this.state.newBook ? "" : this.state.currentBook.title}
                />
                <Form.Control.Feedback type="invalid">
                  Invalid Book Name
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            {/* Select Category */}
            <Form.Group as={Row} controlId="selectCategory">
              <Form.Label column sm="3">
                Category
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  as="select"
                  name="category"
                  onChange={this.handlechange}
                  value={
                    this.state.newBook
                      ? this.state.categories[0].name
                      : this.state.currentBook.category
                  }
                >
                  {this.state.categories.map(category => (
                    <option key={category.id}>{category.name}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>
            {/* Select Author */}
            <Form.Group as={Row} controlId="selectAuthor">
              <Form.Label column sm="3">
                Author
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  as="select"
                  name="author"
                  onChange={this.handlechange}
                  value={
                    this.state.newBook ? "" : this.state.currentBook.author
                  }
                >
                  {this.state.authors.map(author => (
                    <option key={author.id}>{author.name}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="BookCover">
              <Form.Label column sm="3">
                Book Cover:
              </Form.Label>
              <Col sm="9">
                {/* <InputGroup> */}
                <Form.Control
                  required
                  type="text"
                  placeholder="Add Book Cover"
                  onChange={this.handlechange}
                  name="cover"
                  value={this.state.newBook ? "" : this.state.currentBook.cover}
                />
                <Form.Control.Feedback type="invalid">
                  Invalid Image
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Col sm={{ span: 4, offset: 4 }}>
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Col>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default AddEditBookForm;
