import React from 'react';
import { connect } from 'react-redux';

import { fetchReviews, sendReview } from '../../actions/reviews_actions';

import FormValidator from '../../validators/FormValidator';

class ReviewsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.validator = new FormValidator();

    this.state = { guest_name: '', email: '', content: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'Отзывы | Гостевой дом «Авия»';

    this.validator
      .setRule('guest_name', { rule: 'minLengthRule', minLength: 4 })
      .setRule('guest_name', { rule: 'formatRule', format: /^\D{4,30}$/gi })
      .setRule('content', { rule: 'minLengthRule', minLength: 5 });

    this.props.fetchReviews();
  }

  render() {
    return(
      <div className='reviews'>
        <div className='page-description'>
          <h2>Отзывы</h2>
          <p>Для тех наших гостей, кто не успел или забыл оставить свой отзыв
            об отеле книге отзывов - можно сделать это прямо на сайте.
            Для заполнения опроса Вам понадобится не более 5 минут.
            Нам важно Ваше мнение!
          </p>
        </div>
        { this.renderReviewForm() }
        { this.props.reviews.length && this.renderLastReviews() }
      </div>
    )
  }

  renderReviewForm() {
    return(
      <form className='review-form' onSubmit={ this.handleSubmit }>
        <label htmlFor='name'>Имя посетителя</label>
        <input type='text' name='guest_name' id='name' value={ this.state.guest_name }
               onChange={ this.handleInputChange } required minLength={4} maxLength={30}/>
        <label htmlFor='email'>Электронный адрес</label>
        <input type='email' name='email' id='email' value={ this.state.email }
               onChange={ this.handleInputChange } required/>
        <label htmlFor='content'>Отзыв</label>
        <textarea name='content' id='content' rows='6' value={ this.state.content }
                  onChange={ this.handleInputChange } required minLength={5} maxLength={250}/>
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
                    <p>{ review.guest_name }</p>
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

  handleInputChange(event) {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { guest_name, email, content } = this.state;

    let formValid = this.validator.check('guest_name', guest_name)
      && this.validator.check('email', email)
      && this.validator.check('content', content);

    if (!formValid) return;

    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.sendReview({ guest_name, email, content, csrf });
  }
}

const mapStateToProps = (state) => {
  return { reviews: state.reviewsReducer.reviews };
};

const mapDispatchToProps = {
  fetchReviews,
  sendReview
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsComponent)
