import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import ListRoom from './ListRoom';
import './Meeting.scss';
import axios from 'axios';

export default class MeetingComponent extends Component {
  state = {
    bookRoom: []
  };

  componentDidMount() {
    axios
      .get('https://613c8373270b96001798b17a.mockapi.io/api/v1/user')
      .then(res => {
        const items = res.data;
        this.setState({
          bookRoom: items
        });
      });
  }

  addNewMeeting = item => {
    console.log(item);
    this.setState({
      bookRoom: [...this.state.bookRoom, item]
    });
  };
  deleteBookRoom = event => {
    let row = this.state.bookRoom;
    row = row.filter(item => item.id !== event.id);
    this.setState({
      bookRoom: row
    });
  };

  render() {
    return (
      <>
        <div className="container-fluid" style={{ maxWidth: 1200 }}>
          <div className="row">
            <div className="col-12 text-center text-uppercase">
              <Header />
            </div>
            <div className="col-4">
              <Form addNewMeeting={this.addNewMeeting} />
            </div>
            <div className="col-8 list-room">
              <ListRoom
                bookRoom={this.state.bookRoom}
                deleteBookRoom={this.deleteBookRoom}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
