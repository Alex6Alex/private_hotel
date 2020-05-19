import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.menuItems = [
      { name: 'главная', link: '/admin' },
      { name: 'номера', link: '/admin/rooms' },
      { name: 'заявки на бронирование', link: '/admin/contacts' },
    ];
  }

  render() {
    if (!this.props.isLoggedIn) return null;

    return(
      <header>
        { this.renderLogo() }
        { this.renderAddress() }
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
        <span>{ this.props.admin.name }</span>
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

export default connect(mapStateToProps)(HeaderComponent);
