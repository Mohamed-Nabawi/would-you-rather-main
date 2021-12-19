import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from  'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import DashBoard from './DashBoard';
import LoadingBar from 'react-redux-loading';
import LeaderBoard from './LeaderBoard';
import NewQestion from './NewQestion';
import Question from './Question';
import Nav from './Nav';
import Login from './Login';
import Logout from './Logout';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          {this.props.authedUser === null
            ? (<Login />)
            :
            (
              <Fragment>
                <LoadingBar />
                <Logout />
                <div className='container'>
                  <Nav />
                  { this.props.loading === true
                    ? null
                    : <div>
                        <Route path='/' exact component={DashBoard} />
                        <Route path='/leaderBoard' component={LeaderBoard} />
                        <Route path='/questions/:id' exact component={Question} />
                        <Route path='/add' component={NewQestion} />
                      </div>
                  }
                </div>
              </Fragment>
            )
          }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);