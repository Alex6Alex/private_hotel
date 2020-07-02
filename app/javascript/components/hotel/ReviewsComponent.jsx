import React from 'react';
import { connect } from 'react-redux';

import { fetchReviews, sendReview } from '../../actions/reviews_actions';

class ReviewsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { guest_name: '', email: '', content: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'Отзывы | Гостевой дом';

    this.props.fetchReviews();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevProps.reviewWasCreated && this.props.reviewWasCreated) {
      this.setState({guest_name: '', email: '', content: ''})
    }
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
        { !!this.props.reviews.length && this.renderLastReviews() }
        { this.props.showMessage && this.renderMessage() }
      </div>
    )
  }

  renderReviewForm() {
    return(
      <form className='review-form' onSubmit={ this.handleSubmit }>
        <label htmlFor='name'>Имя посетителя</label>
        <input type='text' name='guest_name' id='name' value={ this.state.guest_name }
               onChange={ this.handleInputChange } required
               minLength={4} maxLength={30} pattern='^\D+'/>
        <label htmlFor='email'>Электронный адрес</label>
        <input type='email' name='email' id='email' value={ this.state.email }
               onChange={ this.handleInputChange } required/>
        <label htmlFor='content'>Отзыв</label>
        <textarea name='content' id='content' rows='6' value={ this.state.content }
                  onChange={ this.handleInputChange } required
                  minLength={5} maxLength={250}/>
        <input type='submit' value='Отправить отзыв'/>
      </form>
    )
  }

  renderLastReviews() {
    return(
      <div className='last-reviews'>
        <h2>Последние отзывы посетителей</h2>
        <div className='reviews-list'>
          {
            this.props.reviews.map(review => {
              return(
                <div key={ review.id } className='review'>
                  <div className='review-info'>
                    <p>{ review.guest_name }</p>
                    <p>{ new Date(review.created_at).toLocaleString() }</p>
                  </div>
                  <div className='review-body'>
                    <p>{ review.content }</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

  renderMessage() {
    let message = 'Ваш отзыв был отправлен администрации отеля. Спасибо!';
    if (this.props.errors.length) message = this.props.errors.join('. ');

    return(
      <div className='success-message'>
        <p>{ message }</p>
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

    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.sendReview({ guest_name, email, content, csrf });
  }
}

const mapStateToProps = (state) => {
  const { reviews, showMessage, errors } = state.reviewsReducer;
  return { reviews, showMessage, errors };
};

const mapDispatchToProps = {
  fetchReviews,
  sendReview
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsComponent)
