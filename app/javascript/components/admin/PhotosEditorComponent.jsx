import React from 'react';
import { connect } from 'react-redux';

import RoomImageFormComponent from './forms/RoomImageFormComponent';
import ConferenceRoomImageFormComponent from './forms/ConferenceRoomImageFormComponent';

import {
  fetchPhotos,
  sendPhoto,
  deletePhoto
} from '../../actions/admin/hotel_photos_actions';
import {
  fetchHotelRoomImages,
  deleteRoomImage
} from '../../actions/admin/hotel_room_images_actions';
import {
  fetchConferenceRoomImages,
  deleteConferenceRoomImage
} from '../../actions/admin/conference_room_images_actions';

class PhotosEditorComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hotel_photo: '' };

    this.handleFileInputChange = this.handleFileInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.fileInputRef = React.createRef();
  }

  componentDidMount() {
    document.title = 'Управление галереей';

    this.props.fetchPhotos('/admin/hotel-photos');
    this.props.fetchHotelRoomImages('/admin/hotel-room-images');
    this.props.fetchConferenceRoomImages('/admin/conference-room-images');
  }

  render() {
    return(
      <div className='edit-page'>
        <div className='page-description'>
          <h2>Управление галереей фотографий</h2>
        </div>
        <div className='available-photos'>
          <div>
            <h3>Фотографии отеля</h3>
            <div className='edit-form'>
              <form onSubmit={ this.handleSubmit } encType='multipart/form-data'>
                <label htmlFor='hotel_photo'>Новое изображение</label>
                <input name='hotel_photo' id='hotel_photo' type='file'
                       required onChange={ this.handleFileInputChange }
                       ref={this.fileInputRef}/>
                <input type='submit' value='Сохранить'/>
              </form>
            </div>
            { this.renderImages(this.props.hotelPhotos, 'hotel') }
          </div>
          {
            this.props.hotelRoomImages.map(hotelRoom => {
              return(
                <div key={ hotelRoom.id }>
                  <h3>Фотографии номера "{ hotelRoom.name }"</h3>
                  <RoomImageFormComponent roomId={ hotelRoom.id } />
                  { this.renderImages(hotelRoom.hotel_room_images, 'room') }
                </div>
              )
            })
          }
          {
            this.props.conferenceRoomImages.map(confRoom => {
              return(
                <div key={ confRoom.id }>
                  <h3>Фотографии зала "{ confRoom.name }"</h3>
                  <ConferenceRoomImageFormComponent conferenceRoomId={ confRoom.id } />
                  { this.renderImages(confRoom.conference_room_images, 'conference') }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

  renderImages(images, entity) {
    return(
      <div className='photo-gallery'>
        {
          images.map(image => {
            return(
              <div className='photo-block' key={ image.id }>
                <img src={ image.image_link } alt='hotel-photo'/>
                <i className='fas fa-trash-alt delete-btn'
                   onClick={ () => this.deletePhoto(image, entity) }/>
              </div>
            )
          })
        }
      </div>
    )
  }

  handleFileInputChange(event) {
    const target = event.target;
    this.setState({ [target.name]: target.files[0] });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { hotel_photo } = this.state;

    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.sendPhoto('/admin/hotel-photos', csrf, { hotel_photo });
    this.fileInputRef.current.value = null;
    this.setState({ hotel_photo: '' });
  }

  deletePhoto(photo, entity) {
    const csrf = document.querySelector('[name=csrf-token]').content;
    switch (entity) {
      case 'room':
        this.props.deleteRoomImage('/admin/hotel-room-images', csrf, {id: photo.id});
        break;
      case 'conference':
        this.props.deleteConferenceRoomImage('/admin/conference-room-images', csrf, {id: photo.id});
        break;
      case 'hotel':
        this.props.deletePhoto('/admin/hotel-photos', csrf, {id: photo.id});
        break;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    hotelPhotos: state.hotelPhotosReducer.hotelPhotos,
    hotelRoomImages: state.hotelRoomImagesReducer.hotelRoomImages,
    conferenceRoomImages: state.conferenceRoomImagesReducer.conferenceRoomImages
  };
};

const mapDispatchToProps = {
  fetchPhotos,
  sendPhoto,
  deletePhoto,
  fetchHotelRoomImages,
  deleteRoomImage,
  fetchConferenceRoomImages,
  deleteConferenceRoomImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosEditorComponent);
