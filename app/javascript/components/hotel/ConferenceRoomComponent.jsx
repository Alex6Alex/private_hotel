import React from 'react';
import { connect } from 'react-redux';

import SliderComponent from './SliderComponent';

import { fetchConferenceRoom } from '../../actions/conference_room_actions';

class ConferenceRoomComponent extends React.Component {
  componentDidMount() {
    document.title = 'Конференц-зал | Гостевой дом';

    this.props.fetchConferenceRoom();
  }

  render() {
    return(
      <div className='conference-room'>
        <SliderComponent
          autoChange={false}
          images={
            this.props.conferenceRoom.conference_room_images.map((image) => {
              return image.image_link
            })
          } />
        { this.renderConferenceRoomDescription() }
        { this.renderConferenceRoomSchema() }
      </div>
    )
  }

  renderConferenceRoomDescription() {
    return(
      <div className='page-description'>
        <h2>{ this.props.conferenceRoom.name }</h2>
        <p>{ this.props.conferenceRoom.description }</p>
      </div>
    )
  }

  renderConferenceRoomSchema() {
    return(
      <div className='conference-room-schema'>
        <h2>Планировки зала</h2>
        <img src={ this.props.conferenceRoom.plan_image_link }
             alt='Conference Room Schema'/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { conferenceRoom: state.conferenceRoomReducer.conferenceRoom };
};

const mapDispatchToProps = { fetchConferenceRoom };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConferenceRoomComponent);
