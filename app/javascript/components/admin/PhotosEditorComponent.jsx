import React from 'react';
import { connect } from 'react-redux';

import { fetchPhotos, sendPhoto, deletePhoto } from '../../actions/admin/hotel_photos_actions';

class PhotosEditorComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hotel_photo: null };

    this.handleFileInputChange = this.handleFileInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.fileInputRef = React.createRef();
  }

  componentDidMount() {
    document.title = 'Управление галереей';

    this.props.fetchPhotos('/admin/hotel-photos');
  }

  render() {
    return(
      <div className='edit-page'>
        <div className='page-description'>
          <h2>Управление галереей фотографий</h2>
        </div>
        <div className='edit-form'>
          <form onSubmit={ this.handleSubmit } encType='multipart/form-data'>
            <label htmlFor='hotel_photo'>Новое изображение</label>
            <input name='hotel_photo' id='hotel_photo' type='file'
                   required onChange={ this.handleFileInputChange }
                   ref={this.fileInputRef}/>
            <input type='submit' value='Сохранить'/>
          </form>
        </div>
        <div className='available-photos'>
          <h2>Загруженные фотографии</h2>
          <div className='photo-gallery'>
            {
              this.props.hotelPhotos.map(photo => {
                return(
                  <div className='photo-block' key={ photo.id }>
                    <img src={ photo.image_link } alt='hotel-photo'/>
                    <i className='fas fa-trash-alt delete-btn'
                       onClick={ () => this.deletePhoto(photo) }/>
                  </div>
                )
              })
            }
          </div>
        </div>
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
  }

  deletePhoto(photo) {
    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.deletePhoto('/admin/hotel-photos', csrf, { id: photo.id });
  }
}

const mapStateToProps = (state) => {
  return { hotelPhotos: state.hotelPhotosReducer.hotelPhotos };
};

const mapDispatchToProps = {
  fetchPhotos, sendPhoto, deletePhoto
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosEditorComponent);
