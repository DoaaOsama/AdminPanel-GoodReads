import React, { Component } from "react";
import { Table } from "react-bootstrap";
// import { categories } from "../../data";
import { getCategories, deleteCategory } from "../../API/Category"

import AddEditCategoryForm from "./AddEditForm";

class CategoryAdmin extends Component {
  constructor(props) {
    super(props);

    this.categoryform = this.categoryform.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);

    this.state = {
      categories: [],
      newCategory: false,
      category: {},
      show: false
    };
  }


  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categories: categories
    });

  }

  handleClose = async () => {
    this.setState({
      show: false,
      categories: await getCategories()
    });
  };

  categoryform(formType, category) {
    this.setState(
      {
        newCategory: formType,
        category: category,
        show: true
      });
  }

  async deleteCategory(categoryId) {
    await deleteCategory(categoryId);
    this.setState({
      categories: await getCategories()
    });
  }

  render() {
    return (
      <>
        <Table hover>
          <thead>
            <tr>
              <th style={{ position: "absolute", right: "0rem", fontSize: "20px" }}>
                <i className="fas fa-plus-circle" onClick={() => this.categoryform(true, { _id: null, name: "" })} />
              </th>
            </tr>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.categories.map(category => {
              let row = null
              if (!category.isDeleted) {
                row =
                  <tr key={category._id}>
                    <td>{category.name}</td>
                    <td><div className="tdFlex">
                      <i className="fas fa-pen" onClick={() => this.categoryform(false, category)} />
                      <i className="fas fa-eraser" onClick={() => this.deleteCategory(category._id)} />
                    </div>
                    </td>
                  </tr>
              }
              return row;
            })}
          </tbody>
        </Table>
        {this.state.show && (
          <AddEditCategoryForm newCategory={this.state.newCategory} category={this.state.category} show={this.state.show} categories={this.state.categories} handleClose={this.handleClose} />
        )}
      </>
    );
  }
}
export default CategoryAdmin;
