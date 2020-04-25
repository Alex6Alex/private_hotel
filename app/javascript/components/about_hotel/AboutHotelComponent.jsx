import React from 'react'

export default class AboutHotelComponent extends React.Component {
  componentDidMount() {
    document.title = 'Об отеле | Гостевой дом «Авия»'
  }

  render() {
    return(
      <div className='about-hotel'>
        <div className='about-description'>
          <h2>Об отеле</h2>
          { this.renderDescriptionText() }
        </div>
        <div className='hotel-gallery'>
          <h2>Фотогалерея</h2>
          { this.renderPhotoGallery() }
        </div>
      </div>
    )
  }

  renderDescriptionText() {
    return(
      <div className='description'>
        <p>
          Рады приветствовать Вас в мини-отеле «Авия»
        </p>
        <p>
          Современный мини-отель в городе Севастополе, в Казачьей бухте,
          всего в 10 минутах ходьбы от моря,
          и в 20 минутах езды от центра города.
        </p>
        <p>
          Мы готовы представить Вашему вниманию  двухместные и трехместные
          номера со всеми удобствами для комфортной остановки.
          Номера включают в себя санузел, телевидение.
          По всей территории мини-отеля работает wi-fi.
          Присутствует кухня общего пользования для приготовления пищи,
          столовая, а также небольшая библиотека.
        </p>
        <p>
          Казачья бухта - это отдаленный от центра район города,
          здесь расположен небольшой жилой микрорайон,
          дачный поселок и воинские части. В пешей доступности песочные и
          галечные пляжи, которые являются отличным местом для дайвинга.
          Также неподалеку находится музейный историко-мемориальный
          комплекс «35-я береговая батарея».
        </p>
        <p>
          Те, кто путешествуют без машины, с легкостью могут добраться
          до центра Севастополя на маршрутных такси, городских автобусах
          или троллейбусе. В самом центре к Вашим услугам вся возможная
          индустрия развлечений – рестораны, кинотеатры и театры, аквапарк,
          дельфинарий, детские парки развлечений. Исторический центр города
          привлекает уютными бухтами, нарядной набережной с прогулочными
          яхтами и прибрежными ресторанчиками.
        </p>
      </div>
    )
  }

  renderPhotoGallery() {
    return(
      <div className='gallery-table'>
        <div className='gallery-row'>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
        </div>
        <div className='gallery-row'>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
        </div>
        <div className='gallery-row'>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
          <img src='images/Hotel4.jpg' alt='hotel-photo'/>
        </div>
      </div>
    )
  }
}
