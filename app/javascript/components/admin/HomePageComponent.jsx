import React from 'react';
import { connect } from 'react-redux';

class HomePageComponent extends React.Component {
  componentDidMount() {
    document.title = 'Гостевой дом';
  }

  render() {
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
