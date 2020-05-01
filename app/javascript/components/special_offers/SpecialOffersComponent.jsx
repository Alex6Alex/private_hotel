import React from 'react';

export default class SpecialOffersComponent extends React.Component {
  componentDidMount() {
    document.title = 'Спецпредложения | Гостевой дом «Авия»';
  }

  render() {
    return (
      <div className='special-offers'>
        <div className='short-description'>
          <h2>Спецпредложения</h2>
        </div>
        <div className='special-offers-list'>
          <div className='special-offers-row'>
            <div className='special-offer'>
              <img alt='detail-preview' src='images/Hotel4.jpg'/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid amet asperiores assumenda dolorem inventore, ipsa
                iste maiores maxime natus numquam optio provident quae quas
                quis rerum sit tempore totam voluptatem?
              </p>
              <a href='/'><i className="fas fa-arrow-right"/> Подробнее</a>
            </div>
            <div className='special-offer'>
              <img alt='detail-preview' src='images/Hotel4.jpg'/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid amet asperiores assumenda dolorem inventore, ipsa
                iste maiores maxime natus numquam optio provident quae quas
                quis rerum sit tempore totam voluptatem?
              </p>
              <a href='/'><i className="fas fa-arrow-right"/> Подробнее</a>
            </div>
            <div className='special-offer'>
              <img alt='detail-preview' src='images/Hotel4.jpg'/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid amet asperiores assumenda dolorem inventore, ipsa
                iste maiores maxime natus numquam optio provident quae quas
                quis rerum sit tempore totam voluptatem?
              </p>
              <a href='/'><i className="fas fa-arrow-right"/> Подробнее</a>
            </div>
          </div>
          <div className='special-offers-row'>
            <div className='special-offer'>
              <img alt='detail-preview' src='images/Hotel4.jpg'/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid amet asperiores assumenda dolorem inventore, ipsa
                iste maiores maxime natus numquam optio provident quae quas
                quis rerum sit tempore totam voluptatem?
              </p>
              <a href='/'><i className="fas fa-arrow-right"/> Подробнее</a>
            </div>
            <div className='special-offer'>
              <img alt='detail-preview' src='images/Hotel4.jpg'/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid amet asperiores assumenda dolorem inventore, ipsa
                iste maiores maxime natus numquam optio provident quae quas
                quis rerum sit tempore totam voluptatem?
              </p>
              <a href='/'><i className="fas fa-arrow-right"/> Подробнее</a>
            </div>
            <div className='special-offer'>
              <img alt='detail-preview' src='images/Hotel4.jpg'/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid amet asperiores assumenda dolorem inventore, ipsa
                iste maiores maxime natus numquam optio provident quae quas
                quis rerum sit tempore totam voluptatem?
              </p>
              <a href='/'><i className="fas fa-arrow-right"/> Подробнее</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
