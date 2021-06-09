import React from 'react'
import { Link } from 'react-router-dom';

import withContacts from './hoc/withContacts';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.menuItems = [
      { name: 'главная', link: '/', sub_items: [
          { name: 'схема проезда', link: '/#how_to_find' }
        ]
      },
      { name: 'отель', link: '/about', sub_items: [
          { name: 'Об отеле', link: '/about', sub_items: [{ name: 'Фотогалерея', link: '/about#photo-gallery' }] },
          { name: 'Услуги и удобства', link: '/services' },
          { name: 'Отзывы гостей', link: '/reviews' }
        ]
      },
      { name: 'номера', link: '/rooms' },
      { name: 'контакты', link: '/contacts' },
      { name: 'конференц-сервис', link: '/conference-room' },
      { name: 'спецпредложения', link: '/special-offers' }
    ];
  }

  render() {
    return(
      <header>
        {/*{ this.renderLogo() }*/}
        {/*{ this.renderAddress() }*/}
        { this.renderContactPhone() }
        { this.renderMenu() }
      </header>
    )
  }

  renderLogo() {
    return(
      <div className='logo'><img src='/images/hotel_logo.png' alt='logo'/></div>
    );
  }

  renderAddress() {
    return(
      <div className='address'>
        <span>г. севастополь, ул. ленина 14</span>
      </div>
    );
  }

  renderContactPhone() {
    const contact = this.props.contacts[0];
    const phone = contact !== undefined ? contact.phone : '';
    const formattedPhone = phone.substr(1);

    return(
      <div className='phone'>
        <a className='direct-call' href={ `https://t-do.ru/${formattedPhone}` }>
          <img alt='telegram' src='/images/tele_icon.png'/>
        </a>
        <a className='direct-call' href={ `viber://chat?number=${phone}` }>
          <img alt='viber' src='/images/viber_icon.png'/>
        </a>
        <a className='direct-call' href={ `https://wa.me/${phone}` }>
          <img alt='whatsapp' src='/images/whats_icon.png'/>
        </a>
        <span className='number'>{ phone }</span>
      </div>
    );
  }

  renderMenu() {
    return(
      <nav>
        <div className='menu'>
          {
            this.menuItems.map((item, index) => {
              return(
                <div className='menu-item' key = { index }>
                  <Link to={ item.link }>{ item.name }</Link>
                  { this.renderSubMenu(item) }
                </div>
              )
            })
          }
        </div>
      </nav>
    );
  }

  renderSubMenu(item) {
    if (item.sub_items === undefined) return;

    return(
      <div className='dropdown-links'>
        {
          item.sub_items.map((subItem, key) => {
            if (subItem.sub_items === undefined) {
              return (<Link to={subItem.link} key={key}>{subItem.name}</Link>);
            } else {
              return (
                <div className='menu-sub-item' key={key}>
                  <Link to={subItem.link} key={key}>{subItem.name}</Link>
                  <div className='sub-links'>
                    {
                      subItem.sub_items.map((subSubItem, key) => {
                        return (<Link to={subSubItem.link} key={key}>{subSubItem.name}</Link>);
                      })
                    }
                  </div>
                </div>
              );
            }
          })
        }
      </div>
    )
  }
}

export default withContacts(HeaderComponent);
