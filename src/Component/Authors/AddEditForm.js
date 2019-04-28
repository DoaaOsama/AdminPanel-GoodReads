import React, { Component } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { addAuthor, updateAuthor } from '../../API/Authors'

class AddEditAuthorForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      show: this.props.show,
      newAuthor: this.props.newAuthor,
      authors: this.props.authors,
      author: this.props.author,
      validated: false
    };
  }

  handleClose() {
    this.setState(
      {
        author: {
          _id: null,
          name: "",
          cover: "",
          BD: new Date().toISOString().substring(0, 10),
          bio: "",
          website: ""
        },
        show: false
      }, () => {
        this.props.handleClose(this.state.authors);
      });
  }

  handleChange(e) {
    e.persist();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      validated: true,
      newAuthor: false,
      author: { ...this.state.author, [name]: value }
    });
  }

  async onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { _id } = this.state.author;
    let invalid = false;
    if (_id === null) {
      this.state.authors.map(auth => {
        if (auth.name === this.state.author.name) {
          invalid = true;
          return auth;
        } else return "";
      });
      if (!invalid && !(this.state.author.name === "" || this.state.author.cover === "" || this.state.author.Born === "" || this.state.author.bio === "" || this.state.author.website === "")) {
        await addAuthor(this.state.author)
      }
    } else {
      await updateAuthor(this.state.author._id,this.state.author);
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
        <Modal.Header closeButton><Modal.Title>Author</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form className="author-form" onSubmit={this.onSubmit} noValidate validated={this.state.validated} style={{ padding: "1rem" }}>

            <Form.Group as={Row} controlId="formAuthorName">
              <Form.Label column sm={4}>Author Name:</Form.Label>
              <Col sm={8}>
                <Form.Control required type="text" placeholder="Enter Author name" onChange={this.handleChange} name="name" value={this.state.newAuthor ? "" : this.state.author.name} />
                <Form.Control.Feedback type="invalid">Invalid Category Name</Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formAuthorCover">
              <Form.Label column sm={4}>Image:</Form.Label>
              <Col sm={8}>
                <Form.Control required type="text" placeholder="Enter Author image" onChange={this.handleChange} name="cover" value={this.state.newAuthor ? "" : this.state.author.cover} />
                <Form.Control.Feedback type="invalid">Invalid Image</Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formAuthorBD">
              <Form.Label column sm={4}>Author BirthDate:</Form.Label>
              <Col sm={8}>
                <Form.Control required type="date" placeholder="Enter Author Birthdate" onChange={this.handleChange} name="BD" value={this.state.newAuthor ? new Date().toISOString().substring(0, 10) : new Date(this.state.author.BD).toISOString().substring(0, 10)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formAuthorBIO">
              <Form.Label column sm={4}>Author BIO:</Form.Label>
              <Col sm={8}>
                <Form.Control required as="textarea" placeholder="Enter Author Biography" onChange={this.handleChange} name="bio" value={this.state.newAuthor ? "" : this.state.author.bio} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formAuthorWS">
              <Form.Label column sm={4}>Author Website:</Form.Label>
              <Col sm={8}>
                <Form.Control required type="text" placeholder="Enter Author Website" onChange={this.handleChange} name="website" value={this.state.newAuthor ? "" : this.state.author.website} />
              </Col>
            </Form.Group>

            <Col sm={{ span: 4, offset: 4 }}><Button variant="primary" type="submit">Add</Button></Col>

          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}
export default AddEditAuthorForm;
