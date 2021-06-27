import React from 'react'
import { Link } from 'react-router-dom';

import withContacts from './hoc/withContacts';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { navbarOpen: false };

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

    this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
  }

  render() {
    return(
      <header>
        { this.renderContactPhone() }
        { this.renderMenu() }
        { this.renderHamburgerButton() }
      </header>
    )
  }

  renderContactPhone() {
    const contact = this.props.contacts[0];
    const phone = contact !== undefined ? contact.phone : '';
    const formattedPhone = phone.substr(1);

    return(
      <div className='phone'>
        {/*<a className='direct-call' href={ `https://t-do.ru/${formattedPhone}` }>*/}
        {/*  <img alt='telegram' src='/images/tele_icon.png'/>*/}
        {/*</a>*/}
        {/*<a className='direct-call' href={ `viber://chat?number=${phone}` }>*/}
        {/*  <img alt='viber' src='/images/viber_icon.png'/>*/}
        {/*</a>*/}
        {/*<a className='direct-call' href={ `https://wa.me/${phone}` }>*/}
        {/*  <img alt='whatsapp' src='/images/whats_icon.png'/>*/}
        {/*</a>*/}
        <a href={`tel:${phone}`}>{ phone }</a>
        <span className='number'> - Бесплатно по всей России</span>
      </div>
    );
  }

  renderMenu() {
    return(
      <nav className={`${(this.state.navbarOpen ? 'shown' : 'hidden')}`}>
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

  renderHamburgerButton() {
    return(
      <div className='hamburger-menu'>
        <i className="fa fa-bars" aria-hidden="true" onClick={this.handleNavbarToggle}/>
      </div>
    )
  }

  handleNavbarToggle() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }
}

export default withContacts(HeaderComponent);
