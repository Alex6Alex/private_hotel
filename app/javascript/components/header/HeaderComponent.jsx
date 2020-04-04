import React from 'react'
import { Link } from 'react-router-dom';

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.menuItems = [
      { name: 'главная', link: '/', sub_items: [
          { name: 'схема проезда', link: '#how_to_find' }
        ]
      },
      { name: 'отель', link: '/', sub_items: [
          { name: 'Об отеле', link: '/' },
          { name: 'Услуги и удобства', link: '/services' },
          { name: 'Питание', link: '/' },
          { name: 'Отзывы гостей', link: '/' }
        ]
      },
      { name: 'номера', link: '/rooms' },
      { name: 'контакты', link: '/contacts' },
      { name: 'конференц-сервис', link: '/conference' },
      { name: 'спецпредложения', link: '/services' }
    ];
  }

  render() {
    return(
      <header>
        { this.renderLogo() }
        { this.renderAddress() }
        { this.renderContactPhone() }
        { this.renderMenu() }
      </header>
    )
  }

  renderLogo() {
    return(
      <div className='logo'><img src='images/hotel_logo.png' alt='logo'/></div>
    );
  }

  renderAddress() {
    return(
      <div className='address'>
        <span>г. севастополь, ул. название 2</span>
      </div>
    );
  }

  renderContactPhone() {
    return(
      <div className='phone'>
        <a className='direct-call' href='https://wa.me/79101510855'>
          <img alt='telegram' src='images/tele_icon.png'/>
        </a>
        <a className='direct-call' href='https://wa.me/79101510855'>
          <img alt='viber' src='images/viber_icon.png'/>
        </a>
        <a className='direct-call' href='https://wa.me/79101510855'>
          <img alt='whatsapp' src='images/whats_icon.png'/>
        </a>
        <span className='number'>+7(978)123-45-67</span>
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
            return(<Link to={ subItem.link } key={ key }>{ subItem.name }</Link>);
          })
        }
      </div>
    )
  }
}
