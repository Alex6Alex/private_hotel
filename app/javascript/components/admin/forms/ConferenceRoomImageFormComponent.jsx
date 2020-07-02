import React from 'react';
import { connect } from 'react-redux';

import {
  sendConferenceRoomImage
} from '../../../actions/admin/conference_room_images_actions';

class ConferenceRoomImageFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hotel_photo: '' };

    this.handleFileInputChange = this.handleFileInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.fileInputRef = React.createRef();
  }

  render() {
    return(
      <div className='edit-form'>
        <form onSubmit={ this.handleSubmit } encType='multipart/form-data'>
          <label htmlFor='hotel_photo'>Новое изображение</label>
          <input name='hotel_photo' id='hotel_photo' type='file'
                 required onChange={ this.handleFileInputChange }
                 ref={this.fileInputRef}/>
          <input type='submit' value='Сохранить'/>
        </form>
      </div>
    )
  }

  handleFileInputChange(event) {
    const target = event.target;
    this.setState({ [target.name]: target.files[0] });
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      conference_room_id: this.props.conferenceRoomId,
      conference_room_image: this.state.hotel_photo,
    };

    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.sendConferenceRoomImage('/admin/conference-room-images', csrf, data);
    this.fileInputRef.current.value = null;
    this.setState({ hotel_photo: '' });
  }
}

const mapDispatchToProps = {
  sendConferenceRoomImage
};

export default connect(null, mapDispatchToProps)(ConferenceRoomImageFormComponent);
