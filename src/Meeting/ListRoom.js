import React, { Component } from 'react';

export default class ListRoom extends Component {
  state = {
    isShow: false
  };
  handleDeleteBookRoom = event => {
    this.props.deleteBookRoom(event);
  };
  handleShow = () => {
    this.setState({
      isShow: !this.state.isShow
    });
  };
  render() {
    let { bookRoom } = this.props;
    let { isShow } = this.state;
    return (
      <>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">Room</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookRoom
              .filter((item, idx) => (isShow ? idx < 3 : idx > 1))
              .map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.email}</td>
                    <td>{item.room}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDeleteBookRoom(item)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
          <button
            className="btn btn-success mt-3"
            onClick={() => this.handleShow()}
          >
            {isShow ? 'Show all' : 'Hide'}
          </button>
        </table>
      </>
    );
  }
}
