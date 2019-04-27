import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { authors } from "../../data";
import AddEditAuthorForm from "./AddEditForm";

class AuthorAdmin extends Component {
  constructor(props) {
    super(props);

    this.authorform = this.authorform.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);

    this.state = {
      authors: authors,
      newAuthor: false,
      author: {},
      show: false
    };
  }

  handleClose = newAuthors => {
    this.setState({
      show: false,
      authors: newAuthors
    });
  };

  authorform(formType, author) {
    this.setState(
      {
        newAuthor: formType,
        author: author,
        show: true
      },
      () => console.log(this.state)
    );
  }

  deleteAuthor(authorId) {
    const newauthors = this.state.authors;
    const index = newauthors.findIndex(auth => auth.id === authorId);
    newauthors.splice(index, 1);
    this.setState({ authors: newauthors });
  }

  render() {
    return (
      <>
        <Table hover>
          <thead>
            <tr>
              <th
                style={{
                  position: "absolute",
                  right: "0rem",
                  fontSize: "20px"
                }}
              >
                <i
                  className="fas fa-plus-circle"
                  onClick={() =>
                    this.authorform(true, {
                      id: Number,
                      name: "",
                      cover: "",
                      Born: "",
                      bio: "",
                      Website: ""
                    })
                  }
                />
              </th>
            </tr>
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Born</th>
            </tr>
          </thead>
          <tbody>
            {this.state.authors.map(author => {
              return (
                <tr key={author.id}>
                  <td>{author.id}</td>
                  <td>
                    <img
                      src={author.cover}
                      style={{ width: "100px", height: "150px" }}
                      alt={author.name}
                    />
                  </td>
                  <td>{author.name}</td>
                  <td>{author.Born}</td>
                  <td>
                    <div className="tdFlex">
                      <i
                        className="fas fa-pen"
                        onClick={() => this.authorform(false, author)}
                      />
                      <i
                        className="fas fa-eraser"
                        onClick={() => this.deleteAuthor(author.id)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {this.state.show && (
          <AddEditAuthorForm
            // ref={this.BookModalRef}
            newAuthor={this.state.newAuthor}
            author={this.state.author}
            show={this.state.show}
            authors={this.state.authors}
            handleClose={this.handleClose}
          />
        )}
      </>
    );
  }
}
export default AuthorAdmin;