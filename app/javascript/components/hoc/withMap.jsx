import React from 'react';
import YandexMapComponent from "../map/YandexMapComponent";

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
      const mapOptions = { center: [44.573087, 33.498725], zoom: 12 };
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
        geometry: { type: 'Point', coordinates: [44.573087, 33.498725] }
      });

      map.geoObjects.add(placeMark);
      map.behaviors.disable('scrollZoom');
    }
  }
};
