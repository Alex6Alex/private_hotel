import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchAdminProfile } from '../../actions/admin/authentication_actions';

class AdminAuthentication extends React.Component {
  componentDidMount() {
    this.props.fetchAdminProfile();
  }

  render() {
    if (this.props.isAdminProfileLoading) return(<h1>Loading</h1>);

    const loginPath = '/admin/login';
    if (!this.props.isLoggedIn && this.props.location.pathname !== loginPath)
      return(<Redirect to={loginPath}/>);

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
