import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import ReactDOM from "react-dom";


class DeleteButton extends React.Component {
  state = { modalOpen: false };

  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-danger btn-lg"
            onClick={() => this.setState({ modalOpen: !this.state.modalOpen })}
          >
            Delete
          </button>
        </div>
        {this.state.modalOpen
          ? ReactDOM.createPortal(
              <Modal
                show={this.state.modalOpen}
                onHide={() =>
                  this.setState({ modalOpen: !this.state.modalOpen })
                }
              >
                <Modal.Header closeButton>
                  <h1>Are you sure?</h1>
                </Modal.Header>
                <Modal.Body>The badge will be removed</Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    onClick={() => this.setState({ modalOpen: false })}
                  >
                    Close
                  </Button>
                  <Button
                    variant="danger"
                    onClick={this.props.handleDeleteBadge}
                  >
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal>,
              document.getElementById("modal")
            )
          : null}
      </>
    );
  }
}

export default DeleteButton;
