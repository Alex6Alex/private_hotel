import React from 'react'
import { connect } from 'react-redux';

import { fetchDescriptionAboutHotel } from '../../actions/descriptions_actions';

class AboutHotelComponent extends React.Component {
  componentDidMount() {
    document.title = 'Об отеле | Гостевой дом «Авия»';

    this.props.fetchDescriptionAboutHotel();
  }

  render() {
    return(
      <div className='about-hotel'>
        <div className='about-description'>
          <h2>Об отеле</h2>
          { this.renderDescriptionText() }
        </div>
        <div className='hotel-gallery'>
          <h2>Фотогалерея</h2>
          { this.renderPhotoGallery() }
        </div>
      </div>
    )
  }

  renderDescriptionText() {
    return(
      <div className='description'>
        { (this.props.aboutHotel && <p>{ this.props.aboutHotel }</p>) }
      </div>
    )
  }

  renderPhotoGallery() {
    return(
      <div id='photo-gallery' className='gallery-table'>
        <div className='gallery-row'>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
        </div>
        <div className='gallery-row'>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
        </div>
        <div className='gallery-row'>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    aboutHotel: state.descriptionsReducer.aboutHotel
  };
};

const mapDispatchToProps = {
  fetchDescriptionAboutHotel
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutHotelComponent);
