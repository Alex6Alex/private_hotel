import React from 'react'
import { connect } from 'react-redux';

import { fetchContacts } from '../../actions/contacts_actions';

class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return(
      <footer>
        { this.renderContacts() }
        <div className='footer-bottom'>
          <span>© 2020 официальный сайт отеля, г. севастополь, ул. название 2</span>
        </div>
      </footer>
    )
  }

  renderContacts() {
    return(
      <div className='footer-contacts'>
        {
          this.props.contacts.map((contact, index) => {
            return(
              <div className='footer-contact' key={ index }>
                <h3>{ contact.name }</h3>
                <div className='break-line'/>
                <a className='phone-link' href={ `tel:${contact.phone}` }>
                  { contact.phone }
                </a>
                <a className='email-link' href={ `mailto:${contact.email}` }>
                  { contact.email }
                </a>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { contacts: state.contactsReducer.contacts }
};

const mapDispatchToProps = {
  fetchContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent);