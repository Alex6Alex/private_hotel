import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchSpecialOffers } from '../../actions/special_offers_actions';

class SpecialOffersComponent extends React.Component {
  componentDidMount() {
    document.title = 'Спецпредложения | Гостевой дом «Авия»';

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
              return(
                <div className='special-offer' key={ specialOffer.id }>
                  <img alt='detail-preview' src={ specialOffer.image_link }/>
                  <p>{ specialOffer.content }</p>
                  <Link className='special-offer-link' to={ `special-offers/${specialOffer.id}` }>
                    <i className="fas fa-arrow-right"/> Подробнее
                  </Link>
                </div>
              )
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
