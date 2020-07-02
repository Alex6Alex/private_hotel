import React from 'react';
import { connect } from 'react-redux';

import { fetchReviews, approveReview, deleteReview } from '../../actions/admin/reviews_actions';

class ReviewsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = 'Список отзывов';

    this.props.fetchReviews('/admin/reviews');
  }

  render() {
    return(
      <div className='admin-reviews'>
        <div className='page-description'>
          <h2>Список отзывов</h2>
          <div className='reviews-list'>
          {
            this.props.entities.map(review => {
              const approved = review.approved;
              return(
                <div key={ review.id } className={ `review ${approved ? 'approved' : 'not-approved' }` }>
                  <div className='review-info'>
                    <p>{ review.guest_name }</p>
                    <p>{ new Date(review.created_at).toLocaleString() }</p>
                  </div>
                  <div className='review-body'>
                    <p>{ review.content }</p>
                  </div>
                  <div className='admin-actions'>
                    { !approved && <i className='far fa-check-circle' onClick={ () => this.approveItem(review) }/> }
                    <i className='fas fa-trash-alt' onClick={ () => this.deleteItem(review) }/>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
    )
  }

  approveItem(item) {
    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.approveReview('/admin/reviews', csrf, { id: item.id });
  }

  deleteItem(item) {
    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.deleteReview('/admin/reviews', csrf, { id: item.id });
  }
}

const mapStateToProps = (state) => {
  return { entities: state.reviewsReducer.entities };
};

const mapDispatchToProps = {
  fetchReviews, approveReview, deleteReview
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsComponent)
