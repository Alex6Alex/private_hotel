import React from 'react';
import { connect } from 'react-redux';

import { fetchDescriptionAboutHotel } from '../../actions/descriptions_actions';
import { fetchPhotos } from '../../actions/photos_actions';

class AboutHotelComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { photoModalIndex: 0, showPhotoModalWindow: false };
  }

  componentDidMount() {
    document.title = 'Об отеле | Гостевой дом';

    this.props.fetchDescriptionAboutHotel();
    this.props.fetchPhotos();
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
    if (!this.props.photos.length) return (<p>Фотографии еще не загружены</p>);

    return(
      <div id='photo-gallery' className='gallery-table'>
        {
          this.props.photos.map((photo, index) => {
            return(
              <img key={ photo.id } src={ photo.image_link } alt='hotel-photo'
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
          <img src={ this.props.photos[this.state.photoModalIndex].image_link } alt='zoomed-hotel-photo'/>
          <div className='photo-control'>
            <i className='fas fa-arrow-left'
               onClick={ () => this.openPhoto(this.state.photoModalIndex - 1) }/>
            <span>Фото { this.state.photoModalIndex + 1 } из { this.props.photos.length }</span>
            <i className='fas fa-arrow-right'
               onClick={ () => this.openPhoto(this.state.photoModalIndex + 1) }/>
          </div>
        </div>
      </div>
    )
  }

  openPhoto(index) {
    let lastPhotoIndex = this.props.photos.length - 1;
    let photoModalIndex = index;

    if (photoModalIndex > lastPhotoIndex) photoModalIndex = 0;
    if (photoModalIndex < 0) photoModalIndex = lastPhotoIndex;

    this.setState({ photoModalIndex, showPhotoModalWindow: true });
  }
}

const mapStateToProps = (state) => {
  return {
    aboutHotel: state.descriptionsReducer.aboutHotel,
    photos: state.photosReducer.photos,
  };
};

const mapDispatchToProps = {
  fetchDescriptionAboutHotel, fetchPhotos
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutHotelComponent);
