import React, { Component } from 'react';
import DetailsPage from './pages/DetailsPage';
import LoginPage from './pages/LoginPage';
import { connect } from 'react-redux';
import { getLoginUser, getUsers } from './actions';

class App extends Component {
  state = {
    clicked: false
  };
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(getUsers());
  };

  handleSubmit = userDetails =>  {
    const { dispatch } = this.props;
    dispatch(getLoginUser(userDetails));
    this.setState({ clicked: true });
  }

  render() {
    const { loggedUserDetails } = this.props;
    const { clicked } = this.state;
    return (
      <div style={{
          margin: 'auto',
          width: '50%',
          padding: '10px'
        }}>
        <LoginPage onHandleSubmit={this.handleSubmit}/>
        <DetailsPage clicked={clicked} loggedUserDetails={loggedUserDetails}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userDetails: state.users.userDetails,
  loggedUserDetails: state.users.loginUserDetail
});

export default connect(mapStateToProps)(App);
