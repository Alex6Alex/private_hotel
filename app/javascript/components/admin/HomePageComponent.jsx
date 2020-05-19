import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePageComponent extends React.Component {
  componentDidMount() {
    document.title = 'Гостевой дом «Авия»';
  }

  render() {
    if (!this.props.isLoggedIn) return(<Redirect to='/admin/login'/>);

    return(
      <article>
        <div className='page-description'>
          <h2>Приветствуем Вас в нашем отеле!</h2>
        </div>
      </article>
    )
  }
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.authenticationReducer.isLoggedIn }
};

export default connect(mapStateToProps)(HomePageComponent);
