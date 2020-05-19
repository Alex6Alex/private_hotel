import React from 'react';
import { connect } from 'react-redux';

import { fetchAdminProfile } from '../../actions/admin/authentication_actions';

class AdminAuthentication extends React.Component {
  componentDidMount() {
    this.props.fetchAdminProfile();
  }

  render() {
    if (this.props.isAdminProfileLoading) return(<h1>Loading</h1>);
    return this.props.children;
  }
}

const mapStateToProps = (state) => {
  return { isAdminProfileLoading: state.authenticationReducer.isAdminProfileLoading }
};

const mapDispatchToProps = {
  fetchAdminProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminAuthentication);
