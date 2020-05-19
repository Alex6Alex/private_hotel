import React from 'react';

import withContacts from './hoc/withContacts';
import withMap from './hoc/withMap';

class ContactsComponent extends React.Component {
  componentDidMount() {
    document.title = 'Контакты | Гостевой дом «Авия»';
  }

  render() {
    return(
      <div className='contacts-page'>
        <div className='page-description'>
          <h2>Контакты</h2>
        </div>
        <div className='contacts-block'>
          { this.props.mapComponent }
          { this.renderContacts() }
        </div>
      </div>
    )
  }

  renderContacts() {
    return(
      <div className='contacts-data'>
        <div className='address-info'>
          <h3>Адрес</h3>
          <p>г. Севастополь, ул. Название, 2</p>
        </div>
        {
          this.props.contacts.map((contact, index) => {
            return(
              <div className='department-info' key={ index }>
                <h3>{ contact.name }</h3>
                <p>Телефон: { contact.phone }</p>
                <p>Эл. адрес: { contact.email }</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default withMap(withContacts(ContactsComponent));
