import React from 'react';
import YandexMapComponent from "../YandexMapComponent";

// TODO: add name of hoc for debugging
export default (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <WrappedComponent mapComponent={ this.mapComponent() } { ...this.props }/>
      );
    }

    mapComponent() {
      const mapOptions = { center: [44.612403, 33.525327], zoom: 12 };
      return(
        <YandexMapComponent
          id='yandex-map'
          options={ mapOptions }
          onMapLoad={ map => this.onMapLoadHandler(map) }
        />
      )
    }

    onMapLoadHandler(map) {
      const placeMark = new window.ymaps.GeoObject({
        geometry: { type: 'Point', coordinates: [44.612403, 33.525327] }
      });

      map.geoObjects.add(placeMark);
      map.behaviors.disable('scrollZoom');
    }
  }
};
