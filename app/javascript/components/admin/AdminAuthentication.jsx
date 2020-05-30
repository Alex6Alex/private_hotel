import React from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchAdminProfile } from '../../actions/admin/authentication_actions';

class AdminAuthentication extends React.Component {
  componentDidMount() {
    this.props.fetchAdminProfile();
  }

  render() {
    if (this.props.isAdminProfileLoading) return(<h1>Loading</h1>);
    // if (!this.props.isLoggedIn) return(<Redirect to='/admin/login'/>);

    return this.props.children;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authenticationReducer.isLoggedIn,
    isAdminProfileLoading: state.authenticationReducer.isAdminProfileLoading
  }
};

const mapDispatchToProps = {
  fetchAdminProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminAuthentication);
