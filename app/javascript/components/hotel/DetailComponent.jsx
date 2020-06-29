import React from 'react';
import {Link} from "react-router-dom";

export default class DetailComponent extends React.Component {
  render() {
    return (
      <div className='detail'>
        <p className='title'>{ this.props.detail.name }</p>
        <div className='content'
             dangerouslySetInnerHTML={{ __html: this.props.detail.content }} />
        <Link to={ `${this.props.url}/${this.props.detail.id}` }>
          <i className="fas fa-arrow-right"/> Подробнее
        </Link>
      </div>
    )
  }
}
