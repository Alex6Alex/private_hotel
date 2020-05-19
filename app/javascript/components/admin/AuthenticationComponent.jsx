import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { authenticateAdmin } from '../../actions/admin/authentication_actions';

class AuthenticationComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '', password: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'Авторизация администратора';
  }

  render() {
    if (this.props.isLoggedIn) return(<Redirect to='/admin'/>);

    return(
      <div className='authentication-page'>
        <form onSubmit={ this.handleSubmit }>
          <div>
            <label>Логин</label>
            <input name='username' value={ this.state.username }
                   onChange={ this.handleInputChange } required/>
          </div>
          <div>
            <label>Пароль</label>
            <input type='password' name='password' value={ this.state.password }
                   onChange={ this.handleInputChange } required/>
          </div>
          <input type='submit' value='Отправить'/>
        </form>
      </div>
    )
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { username, password } = this.state;

    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.authenticateAdmin({ username, password, csrf });
  }
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.authenticationReducer.isLoggedIn }
};

const mapDispatchToProps = {
  authenticateAdmin
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationComponent);
