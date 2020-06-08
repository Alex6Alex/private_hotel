import React from 'react'

import withContacts from './hoc/withContacts';

class FooterComponent extends React.Component {
  render() {
    return(
      <footer>
        { this.renderContacts() }
        <div className='footer-bottom'>
          <span>© 2020 официальный сайт отеля, г. севастополь, ул. ленина 14</span>
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

export default withContacts(FooterComponent);