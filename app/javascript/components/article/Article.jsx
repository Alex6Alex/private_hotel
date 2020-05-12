import React from 'react';

export default class Article extends React.Component {
  componentDidMount() {
    document.title = 'Спецпредложение | Гостевой дом «Авия»';
  }

  render() {
    return (
      <div className='info-article'>
        <div className='page-description'>
          <h2>Спецпредложение</h2>
        </div>
        <div className='special-offer-info'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquid amet asperiores assumenda dolorem inventore, ipsa
            iste maiores maxime natus numquam optio provident quae quas
            quis rerum sit tempore totam voluptatem?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquid amet asperiores assumenda dolorem inventore, ipsa
            iste maiores maxime natus numquam optio provident quae quas
            quis rerum sit tempore totam voluptatem?
          </p>
        </div>
        <img src='/images/Hotel4.jpg' alt='Special Offer Image'/>
      </div>
    )
  }
}
