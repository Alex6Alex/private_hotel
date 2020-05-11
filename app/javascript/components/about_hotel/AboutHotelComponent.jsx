import React from 'react';
import { connect } from 'react-redux';

import { fetchDescriptionAboutHotel } from '../../actions/descriptions_actions';

class AboutHotelComponent extends React.Component {
  constructor(props) {
    super(props);

    this.photos = [
      'images/Hotel1.jpg',
      'images/Hotel2.jpg',
      'images/Hotel3.jpg',
      'images/Hotel4.jpg',
      'images/Hotel1.jpg',
      'images/Hotel2.jpg',
      'images/Hotel3.jpg',
      'images/Hotel4.jpg',
      'images/Hotel2.jpg'
    ];

    this.state = { photoModalIndex: 0, showPhotoModalWindow: false };
  }

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
        { this.renderPhotoModalWindow() }
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
        {
          this.photos.map((photoSrc, index) => {
            return(
              <img key={ index } src={ photoSrc } alt='hotel-photo'
                   onClick={ () => this.openPhoto(index) }/>
            )
          })
        }
      </div>
    )
  }

  renderPhotoModalWindow() {
    if (!this.state.showPhotoModalWindow) return;

    return(
      <div className='photo-modal'>
        <div className='modal'>
          <i className='close-photo fas fa-times'
             onClick={ () => this.setState({ showPhotoModalWindow: false }) }/>
          <img src={ this.photos[this.state.photoModalIndex] } alt='zoomed-hotel-photo'/>
          <div className='photo-control'>
            <i className='fas fa-arrow-left'
               onClick={ () => this.openPhoto(this.state.photoModalIndex - 1) }/>
            <span>Фото { this.state.photoModalIndex + 1 } из { this.photos.length }</span>
            <i className='fas fa-arrow-right'
               onClick={ () => this.openPhoto(this.state.photoModalIndex + 1) }/>
          </div>
        </div>
      </div>
    )
  }

  openPhoto(index) {
    let lastPhotoIndex = this.photos.length - 1;
    let photoModalIndex = index;

    if (photoModalIndex > lastPhotoIndex) photoModalIndex = 0;
    if (photoModalIndex < 0) photoModalIndex = lastPhotoIndex;

    this.setState({ photoModalIndex, showPhotoModalWindow: true });
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
