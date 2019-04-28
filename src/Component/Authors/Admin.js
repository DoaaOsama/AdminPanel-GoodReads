import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { getAuthors, deleteAuthor } from "../../API/Authors";

import AddEditAuthorForm from "./AddEditForm";

class AuthorAdmin extends Component {
  constructor(props) {
    super(props);

    this.authorform = this.authorform.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);

    this.state = {
      authors: [],
      newAuthor: false,
      author: {},
      show: false
    };
  }

  async componentDidMount() {
    const authors = await getAuthors();
    this.setState({
      authors: authors
    });
  }

  handleClose = async () => {
    this.setState({
      show: false,
      authors: await getAuthors()
    });
  };

  authorform(formType, author) {
    this.setState(
      {
        newAuthor: formType,
        author: author,
        show: true
      });
  }

  async deleteAuthor(authorId) {
    await deleteAuthor(authorId);
    this.setState({ authors: await getAuthors() });
  }

  render() {
    return (
      <>
        <Table hover>
          <thead>
            <tr>
              <th style={{ position: "absolute", right: "0rem", fontSize: "20px" }}>
                <i className="fas fa-plus-circle" onClick={() => this.authorform(true, { _id: null, name: "", cover: "", BD: new Date().toISOString().substring(0, 10), bio: "", website: "" })} />
              </th>
            </tr>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Birth Date</th>
              <th>Biography</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {this.state.authors.map(author => {
              return (
                <tr key={author._id}>
                  <td><img src={author.cover} style={{ width: "100px", height: "150px" }} alt={author.name} /></td>
                  <td>{author.name}</td>
                  <td>{new Date(author.BD).toDateString()}</td>
                  <td>{author.bio}</td>
                  <td>{author.website}</td>
                  <td>
                    <div className="tdFlex">
                      <i className="fas fa-pen" onClick={() => this.authorform(false, author)} />
                      <i className="fas fa-eraser" onClick={() => this.deleteAuthor(author._id)} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {this.state.show && (
          <AddEditAuthorForm newAuthor={this.state.newAuthor} author={this.state.author} show={this.state.show} authors={this.state.authors} handleClose={this.handleClose} />
        )}
      </>
    );
  }
}
export default AuthorAdmin;