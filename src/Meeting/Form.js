import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    email: '',
    room: ''
  };

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleChangeRoom = event => {
    this.setState({
      room: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.email || !this.state.room) {
      alert('Phải nhập trước khi submit');
      return;
    }
    this.props.addNewMeeting({
      id: Math.floor(Math.random() * 1000),
      email: this.state.email,
      room: this.state.room
    });
    this.setState({
      email: '',
      room: ''
    });
  };

  render() {
    return (
      <form className="form-floating">
        {console.log(this.state)}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder=" "
            value={this.state.email}
            onChange={event => this.handleChangeEmail(event)}
          />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder=" "
            value={this.state.room}
            onChange={event => this.handleChangeRoom(event)}
          />
          <label htmlFor="floatingPassword">Room</label>
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={event => this.handleSubmit(event)}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
