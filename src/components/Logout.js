import React, { Component } from 'react';
import { setAuthedUser }  from '../actions/authedUser';
import { connect } from 'react-redux';
import {Button} from 'reactstrap';

class Logout extends Component {

  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null));
  }

  render() {
    return (
      <div>
        <p>
          Logged in as: <strong>{this.props.authedUser}</strong>
        </p>
        <Button
          className='btn'
          onClick={this.handleLogout}>
          Logout
        </Button>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Logout);
