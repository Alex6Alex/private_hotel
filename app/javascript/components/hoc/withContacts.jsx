import React from 'react';
import { connect } from 'react-redux';

import { fetchContacts } from '../../actions/contacts_actions';

export default (WrappedComponent) => {
  class HOComponent extends React.Component {
    componentDidMount() {
      this.props.fetchContacts();
    }

    render() {
      return(<WrappedComponent { ...this.props }/>);
    }
  }

  const mapStateToProps = (state) => {
    return { contacts: state.contactsReducer.contacts }
  };

  const mapDispatchToProps = {
    fetchContacts
  };

  return connect(mapStateToProps, mapDispatchToProps)(HOComponent);
};
