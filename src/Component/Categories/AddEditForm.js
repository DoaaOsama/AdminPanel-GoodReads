import React, { Component } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { addCategory, updateCategory } from '../../API/Category';

class AddEditCategoryForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      show: this.props.show,
      validated: false,
      newCategory: this.props.newCategory,
      category: this.props.category,
      categories: this.props.categories,
      errmsg: ""
    };
  }

  handleClose() {
    this.setState(
      {
        show: false,
        category: {
          _id: null,
          name: ""
        }
      },
      () => {
        this.props.handleClose(this.state.categories);
      }
    );
  }

  handleChange(e) {
    e.persist();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      validated: true,
      newCategory: false,
      category: { ...this.state.category, [name]: value }
    });
  }

  async onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { _id } = this.state.category;
    let invalid = false;
    if (_id === null) {
      this.state.categories.map(cat => {
        if (this.state.category.name === cat.name) {
          invalid = true;
          return cat;
        } else return "";
      });
      if (!invalid && this.state.category.name !== "") {
        await addCategory(this.state.category);
      }
    } else {
      await updateCategory(this.state.category._id, this.state.category);
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
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="category-form" onSubmit={this.onSubmit} noValidate validated={this.state.validated}>
            <Form.Group as={Row} controlId="formCategory">
              <Form.Label column sm={4}>Category Name:</Form.Label>
              <Col sm={8}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter category name"
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.newCategory ? "" : this.state.category.name}
                />
                <Form.Control.Feedback type="invalid">
                  "invalid category name"
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

export default AddEditCategoryForm;
