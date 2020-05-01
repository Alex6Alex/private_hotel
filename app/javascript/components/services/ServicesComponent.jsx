import React from 'react';

export default class ServicesComponent extends React.Component {
  componentDidMount() {
    document.title = 'Услуги | Гостевой дом «Авия»';
  }

  render() {
    return (
      <div className='services'>
        <div className='short-description'>
          <h2>Услуги</h2>
        </div>
        <div className='service-list'>
          <div className='service-list-row'>
            <div className='service-item'>
              <img className='service-icon' src='images/transfer.png'/>
              <p>Трансфер</p>
            </div>
            <div className='service-item'>
              <img className='service-icon' src='images/transfer.png'/>
              <p>Трансфер</p>
            </div>
            <div className='service-item'>
              <img className='service-icon' src='images/transfer.png'/>
              <p>Трансфер</p>
            </div>
            <div className='service-item'>
              <img className='service-icon' src='images/transfer.png'/>
              <p>Трансфер</p>
            </div>
          </div>
          <div className='service-list-row'>
            <div className='service-item'>
              <img className='service-icon' src='images/transfer.png'/>
              <p>Трансфер</p>
            </div>
            <div className='service-item'>
              <img className='service-icon' src='images/transfer.png'/>
              <p>Трансфер</p>
            </div>
            <div className='service-item'>
              <img className='service-icon' src='images/transfer.png'/>
              <p>Трансфер</p>
            </div>
            <div className='service-item'>
              <img className='service-icon' src='images/transfer.png'/>
              <p>Трансфер</p>
            </div>
          </div>
          <div className='service-list-row'>
            <div className='service-item'>
              <img className='service-icon' src='images/transfer.png'/>
              <p>Трансфер</p>
            </div>
            <div className='service-item'>
              <img className='service-icon' src='images/transfer.png'/>
              <p>Трансфер</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
