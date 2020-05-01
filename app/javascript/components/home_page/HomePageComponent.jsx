import React from 'react'

import SliderComponent from "./SliderComponent";
import withMap from '../hoc/withMap';

class HomePageComponent extends React.Component {
  componentDidMount() {
    document.title = 'Гостевой дом «Авия»'
  }

  render() {
    return(
      <article>
        <SliderComponent/>
        <div className='short-about'>
          <h2>Приветствуем Вас в нашем отеле!</h2>
          { this.renderDescriptionText() }
        </div>
        { this.renderDetails() }
        <div className='find-us-info'>
          <h2 id='how_to_find'>Как нас найти</h2>
          { this.props.mapComponent }
        </div>
      </article>
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

  renderDetails() {
    return(
      <div className='details'>
        <h2>Последние новости</h2>
        {
          [1, 2, 3].map(index => {
            return(
              <div className='detail' key={ index }>
                <img alt='detail-preview' src='images/Hotel4.jpg'/>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid amet asperiores assumenda dolorem inventore, ipsa
                  iste maiores maxime natus numquam optio provident quae quas
                  quis rerum sit tempore totam voluptatem?
                </p>
                <a href='/'><i className="fas fa-arrow-right"/> Подробнее</a>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default withMap(HomePageComponent);
