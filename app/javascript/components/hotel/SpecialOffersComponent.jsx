import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchSpecialOffers } from '../../actions/special_offers_actions';

import DetailComponent from './DetailComponent';

class SpecialOffersComponent extends React.Component {
  componentDidMount() {
    document.title = 'Спецпредложения | Гостевой дом';

    this.props.fetchSpecialOffers();
  }

  render() {
    return (
      <div className='special-offers'>
        <div className='page-description'>
          <h2>Спецпредложения</h2>
        </div>
        <div className='special-offers-list'>
          {
            this.props.specialOffers.map((specialOffer) => {
              return(<DetailComponent url='/special-offers' key={ specialOffer.id } detail={ specialOffer }/>)
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { specialOffers: state.specialOffersReducer.specialOffers };
};

const mapDispatchToProps = { fetchSpecialOffers };

export default connect(mapStateToProps, mapDispatchToProps)(SpecialOffersComponent);
