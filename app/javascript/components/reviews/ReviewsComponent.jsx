import React from 'react'

export default class ReviewsComponent extends React.Component {
  componentDidMount() {
    document.title = 'Отзывы | Гостевой дом «Авия»'
  }

  render() {
    return(
      <div className='reviews'>
        <div className='reviews-description'>
          <h2>Отзывы</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aliquid autem delectus dolor dolores eius eveniet hic incidunt iste magnam modi nam, nobis numquam officia porro quaerat quod vel.</p>
        </div>
        { this.renderReviewForm() }
        { this.renderLastReviews() }
      </div>
    )
  }

  renderReviewForm() {
    return(
      <form className='review-form'>
        <label htmlFor='name'>Имя посетителя</label>
        <input type='text' name='guest_name' id='name'/>
        <label htmlFor='email'>Электронный адрес</label>
        <input type='text' name='email' id='email'/>
        <label htmlFor='review_text'>Отзыв</label>
        <textarea name='review_text' id='review_text' rows='6'/>
        <input type='submit' value='Отправить отзыв'/>
      </form>
    )
  }

  renderLastReviews() {
    return(
      <div className='last-reviews'>
        <h2>Последние отзывы посетителей</h2>
        {
          [1, 2, 3].map(index => {
            return(
              <div key={ index } className='reviews-list'>
                <div className='review'>
                  <div className='review-info'>
                    <p className='name'>Имя Фамилия</p>
                    <p className='date'>12.05.2020</p>
                  </div>
                  <div className='review-body'>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolor ducimus eius error expedita facere illum nobis numquam, pariatur porro, quas quis recusandae repellendus sapiente sunt temporibus voluptates? Blanditiis, quas!</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
