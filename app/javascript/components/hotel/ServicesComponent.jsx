import React from 'react';
import { connect } from 'react-redux';

import { fetchServices } from '../../actions/services_actions';

class ServicesComponent extends React.Component {
  componentDidMount() {
    document.title = 'Услуги | Гостевой дом';

    this.props.fetchServices();
  }

  render() {
    return (
      <div className='services'>
        <div className='page-description'>
          <h2>Услуги</h2>
        </div>
        <div className='service-list'>
          {
            this.props.services.map(service => {
              return(
                <div className='service-item' key={ service.id }>
                  <img className='service-icon' src={ service.image_link }/>
                  <p>{ service.name }</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { services: state.servicesReducer.services };
};

const mapDispatchToProps = {
  fetchServices
};

export default connect(mapStateToProps, mapDispatchToProps)(ServicesComponent);
