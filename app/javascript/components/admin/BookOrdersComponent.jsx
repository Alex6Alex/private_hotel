import React from 'react';
import { connect } from 'react-redux';

import {
  fetchBookOrders,
  approveBookOrder,
  deleteBookOrder
} from '../../actions/admin/book_orders_actions';

class BookOrdersComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = 'Список заявок на бронирование';

    this.props.fetchBookOrders('/admin/book_orders');
  }

  render() {
    return(
      <div className='admin-reviews'>
        <div className='page-description'>
          <h2>Список заявок на бронирование</h2>
          <div className='reviews-list'>
          {
            this.props.bookOrders.map(bookOrder => {
              const approved = bookOrder.approved;
              return(
                <div key={ bookOrder.id } className={ `review ${approved ? 'approved' : 'not-approved' }` }>
                  <div className='review-info'>
                    <p>{ bookOrder.hotel_room.name }</p>
                    <p>{ new Date(bookOrder.created_at).toLocaleString() }</p>
                  </div>
                  <div className='review-body'>
                    <p>Дата заезда: { bookOrder.arrival_date }</p>
                    <p>Время заезда: { bookOrder.time_in }</p>
                    <p>Дата выезда: { bookOrder.departure_date }</p>
                    <p>Количество человек с местом: { bookOrder.guests_with_place }</p>
                    <p>Количество человек без места: { bookOrder.guests_without_place }</p>
                    <p>Контактный эл. адрес: { bookOrder.email }</p>
                    <p>Контактный телефон: { bookOrder.phone }</p>
                  </div>
                  <div className='admin-actions'>
                    { !approved && <i className='far fa-check-circle' onClick={ () => this.approveItem(bookOrder) }/> }
                    <i className='fas fa-trash-alt'
                       onClick={ () => this.deleteItem(bookOrder) }/>
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
    this.props.approveBookOrder('/admin/book_orders', csrf, { id: item.id });
  }

  deleteItem(item) {
    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.deleteBookOrder('/admin/book_orders', csrf, { id: item.id });
  }
}

const mapStateToProps = (state) => {
  return { bookOrders: state.bookOrdersReducer.bookOrders };
};

const mapDispatchToProps = { fetchBookOrders, approveBookOrder, deleteBookOrder };

export default connect(mapStateToProps, mapDispatchToProps)(BookOrdersComponent)
