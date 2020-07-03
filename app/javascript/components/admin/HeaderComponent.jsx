import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { closeAdminProfile } from '../../actions/admin/authentication_actions';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.menuItems = [
      { name: 'новости', link: '/admin/news' },
      { name: 'услуги', link: '/admin/services-list' },
      { name: 'номера', link: '/admin/rooms' },
      { name: 'спецпредложения', link: '/admin/special-offers-list' },
      { name: 'отзывы гостей', link: '/admin/reviews-list' },
      { name: 'описания страниц', link: '/admin/page-descriptions' },
      { name: 'фото отеля', link: '/admin/photos' },
      { name: 'Конференц-залы', link: '/admin/conference-rooms' },
      { name: 'заявки на бронирование', link: '/admin/book-orders' },
      { name: 'контакты', link: '/admin/hotel-contacts' },
    ];
  }

  render() {
    if (!this.props.isLoggedIn) return null;

    return(
      <header>
        { this.renderLogo() }
        { this.renderAdminInfo() }
        { this.renderMenu() }
      </header>
    )
  }

  renderLogo() {
    return(
      <div className='logo'><img src='/images/hotel_logo.png' alt='logo'/></div>
    );
  }

  renderAdminInfo() {
    return(
      <div className='admin-info'>
        <span>{ this.props.admin.name }</span>
        <span className='logout' onClick={ () => this.props.closeAdminProfile() }>(Выйти)</span>
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
                </div>
              )
            })
          }
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authenticationReducer.isLoggedIn,
    admin: state.authenticationReducer.admin,
  }
};

const mapDispatchToProps = {
  closeAdminProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
