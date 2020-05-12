import React from 'react';
import { Link } from 'react-router-dom';

export default class SpecialOffersComponent extends React.Component {
  componentDidMount() {
    document.title = 'Спецпредложения | Гостевой дом «Авия»';
  }

  render() {
    return (
      <div className='special-offers'>
        <div className='page-description'>
          <h2>Спецпредложения</h2>
        </div>
        <div className='special-offers-list'>
          <div className='special-offers-row'>
            {
              [1,2,3].map(index => {
                return(
                  <div className='special-offer' key={ index }>
                    <img alt='detail-preview' src='images/Hotel4.jpg'/>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid amet asperiores assumenda dolorem inventore, ipsa
                      iste maiores maxime natus numquam optio provident quae quas
                      quis rerum sit tempore totam voluptatem?
                    </p>
                    <Link className='special-offer-link' to={ `special-offers/${index}` }>
                      <i className="fas fa-arrow-right"/> Подробнее
                    </Link>
                  </div>
                )
              })
            }
          </div>
          <div className='special-offers-row'>
            {
              [1,2,3].map(index => {
                return(
                  <div className='special-offer' key={ index }>
                    <img alt='detail-preview' src='images/Hotel4.jpg'/>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquid amet asperiores assumenda dolorem inventore, ipsa
                      iste maiores maxime natus numquam optio provident quae quas
                      quis rerum sit tempore totam voluptatem?
                    </p>
                    <Link className='special-offer-link' to={ `special-offers/${index}` }>
                      <i className="fas fa-arrow-right"/> Подробнее
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
