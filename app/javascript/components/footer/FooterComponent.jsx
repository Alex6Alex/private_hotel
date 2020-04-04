import React from 'react'

export default class FooterComponent extends React.Component {
  constructor(props) {
    super(props);

    this.contacts = [
      { name: 'организация конференций', phone: '+79781234556', email: 'somw_email@mail.com' },
      { name: 'бронирование номеров', phone: '+79781234556', email: 'somw_email@mail.com' },
      { name: 'кафе', phone: '+79781234556', email: 'somw_email@mail.com' }
    ]
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
          this.contacts.map((contact, index) => {
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
