import React from 'react';
import { connect } from 'react-redux';

import {fetchReviews} from "../../actions/reviews_actions";

class ReviewsComponent extends React.Component {
  componentDidMount() {
    document.title = 'Отзывы | Гостевой дом «Авия»';

    this.props.fetchReviews();
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
          this.props.reviews.map(review => {
            return(
              <div key={ review.id } className='reviews-list'>
                <div className='review'>
                  <div className='review-info'>
                    <p>{ review.user_name }</p>
                    <p>{ review.created_at }</p>
                  </div>
                  <div className='review-body'>
                    <p>{ review.content }</p>
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

const mapStateToProps = (state) => {
  return { reviews: state.reviewsReducer.reviews };
};

const mapDispatchToProps = {
  fetchReviews
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsComponent)
