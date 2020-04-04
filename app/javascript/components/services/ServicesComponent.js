import React from 'react';

import ServiceDescriptionComponent from './ServiceDescriptionComponent';

export default class ServicesComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedService: '',
    };

    this.styleClasses = [
      [
        { class: 'fa fa-wifi', name: 'Wi-Fi интернет' },
        { class: 'fa fa-archive', name: 'Хранение ценных вещей' },
        { class: 'fa fa-tint', name: 'Питьевая вода' },
      ],
      [
        { class: 'fa fa-car', name: 'Трансфер' },
        { class: 'fa fa-cutlery', name: 'Столовая' },
      ],
    ];
  }

  componentDidMount() {
    document.title = 'Услуги | Гостевой дом «Авия»';
  }

  onSelect(selectedService) {
    this.setState({ selectedService });
  }

  serviceShow() {
    if (this.state.selectedService !== '') {
      return <ServiceDescriptionComponent service={this.state.selectedService} />;
    }
  }

  render() {
    return (
      <div className="services-page">
        <div className="services">
          <h2>Услуги</h2>
          {
            this.styleClasses.map(
              (column, columnIndex) => this.renderColumn(columnIndex, column),
            )
          }
        </div>
        { this.serviceShow() }
      </div>
    );
  }

  renderColumn(columnIndex, column) {
    return (
      <div className="services-column" key={columnIndex}>
        {
          column.map((service, serviceIndex) => this.renderService(serviceIndex, service))
        }
      </div>
    );
  }

  renderService(serviceIndex, service) {
    return (
      <div className="service" key={serviceIndex} onClick={this.onSelect.bind(this, service.name)}>
        <div className="service-icon">
          <span className={service.class} aria-hidden="true" />
        </div>
        <div className="service-name">
          <p>{ service.name }</p>
        </div>
      </div>
    );
  }
}
