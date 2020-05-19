import React from 'react';

import withSlider from './hoc/withSlider';
import withConferenceRoomBookForm from './hoc/withConferenceRoomBookForm';

// import { connect } from 'react-redux';

// import { fetchRoom } from '../../actions/rooms_actions';

class ConferenceRoomComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showBookForm: false };
    this.handleBookButtonClick = this.handleBookButtonClick.bind(this);
  }

  componentDidMount() {
    document.title = 'Конференц-зал | Гостевой дом «Авия»';

    // const { fetchRoom, roomId } = this.props;
    // fetchRoom(roomId);
  }

  render() {
    return(
      <div className='conference-room'>
        { this.props.sliderComponent }
        { this.renderConferenceRoomDescription() }
        { this.renderConferenceRoomSchema() }
        <div className='book-button'>
          <div className='link-button' onClick={ this.handleBookButtonClick }>Заказать мероприятие</div>
        </div>
        { this.state.showBookForm && this.props.bookFormComponent }
      </div>
    )
  }

  renderConferenceRoomDescription() {
    return(
      <div className='page-description'>
        <h2>Конференц-зал</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci inventore maiores porro ratione. Adipisci asperiores aspernatur cupiditate dolorem eius id itaque, iure modi mollitia nihil officia, pariatur quibusdam ut! Nobis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci inventore maiores porro ratione. Adipisci asperiores aspernatur cupiditate dolorem eius id itaque, iure modi mollitia nihil officia, pariatur quibusdam ut! Nobis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci inventore maiores porro ratione. Adipisci asperiores aspernatur cupiditate dolorem eius id itaque, iure modi mollitia nihil officia, pariatur quibusdam ut! Nobis.</p>
      </div>
    )
  }

  renderConferenceRoomSchema() {
    return(
      <div className='conference-room-schema'>
        <h2>Планировки зала</h2>
        <img src='/images/ConferenceRoomSchema.jpg' alt='Conference Room Schema'/>
      </div>
    )
  }

  handleBookButtonClick() {
    this.setState({ showBookForm: true });
    // this.props.bookFormComponent.scrollIntoForm();
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return { room: state.hotelRoomsReducer.room, roomId: ownProps.roomId };
// };
//
// const mapDispatchToProps = { fetchRoom };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
export default (withSlider(withConferenceRoomBookForm(ConferenceRoomComponent), false));
