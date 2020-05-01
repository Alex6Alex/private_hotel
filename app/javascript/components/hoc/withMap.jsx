import React from 'react';
import YandexMapComponent from "../home_page/YandexMapComponent";

// TODO: add name of hoc for debugging
export default (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return(
        <WrappedComponent
          mapComponent={ this.mapComponent() } { ...this.props }
        />
      );
    }

    mapComponent() {
      return(
        <YandexMapComponent
          id='yandex-map'
          options={{
            center: [44.573087, 33.498725],
            zoom: 12
          }}
          onMapLoad={ map => {
            let placeMark = new window.ymaps.GeoObject({
              geometry: { type: 'Point', coordinates: [44.573087, 33.498725] }
            });
            map.geoObjects.add(placeMark);
            map.behaviors.disable('scrollZoom');
          }}
        />
      )
    }
  }
};
