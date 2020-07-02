import React from 'react';
import { connect } from 'react-redux';

import SliderComponent from './SliderComponent';

import { fetchDescriptionAboutHotel } from '../../actions/descriptions_actions';
import { fetchNewsList } from '../../actions/news_actions';
import { fetchPhotos } from '../../actions/photos_actions';

import withMap from './hoc/withMap';

import DetailComponent from './DetailComponent';

class HomePageComponent extends React.Component {
  componentDidMount() {
    document.title = 'Гостевой дом';

    let anchorLink = this.props.location.hash;
    if (anchorLink && document.getElementById(anchorLink.substr(1))) {
      document.getElementById(anchorLink.substr(1)).scrollIntoView({behavior: "smooth"})
    }

    this.props.fetchDescriptionAboutHotel();
    this.props.fetchNewsList();
    this.props.fetchPhotos();
  }

  render() {
    return(
      <article>
        <SliderComponent
          autoChange={true}
          images={ this.props.photos.map(photo => photo.image_link) } />
        <div className='page-description'>
          <h2>Приветствуем Вас в нашем отеле!</h2>
          { this.renderDescriptionText() }
        </div>
        { this.renderDetails() }
        <div id='how_to_find' className='find-us-info'>
          <h2>Как нас найти</h2>
          { this.props.mapComponent }
        </div>
      </article>
    )
  }

  renderDescriptionText() {
    return(
      <div className='description'>
        { (this.props.aboutHotel && <p>{ this.props.aboutHotel }</p>) }
      </div>
    )
  }

  renderDetails() {
    return(
      <div className='details'>
        <h2>Последние новости</h2>
        {
          this.props.newsList.map((peaceOfNews) => {
            return(<DetailComponent url='/news' key={ peaceOfNews.id } detail={ peaceOfNews } />)
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    aboutHotel: state.descriptionsReducer.aboutHotel,
    newsList: state.newsReducer.newsList,
    photos: state.photosReducer.photos,
  };
};

const mapDispatchToProps = {
  fetchDescriptionAboutHotel, fetchNewsList, fetchPhotos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withMap(HomePageComponent));
