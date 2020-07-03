import React from 'react';

export default class NotFoundComponent extends React.Component {
  render() {
    return(
      <div className='error-page'>
        <p className='error-code'>404</p>
        <p className='error-description'>Запрашиваемая страница не найдена</p>
      </div>
    )
  }
}