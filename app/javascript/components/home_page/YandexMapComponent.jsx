import React from 'react'

export default class YandexMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    window.ymaps.ready(() => {
      let map = new window.ymaps.Map(
        this.props.id,
        this.props.options,
        { searchControlProvider: 'yandex#search' }
      );

      this.props.onMapLoad(map);
    });
  }

  componentDidMount() {
    this.initializeScript().addEventListener('load', e => this.onScriptLoad());
  }

  render() {
    return(
      <div className="map" id={ this.props.id } />
    )
  }

  initializeScript() {
    let mapElementScript = document.createElement('script');
    mapElementScript.src = `https://api-maps.yandex.ru/2.1/?apikey=11f2b98b-483f-4b37-9b4a-d8cc65e17eea&lang=ru_RU`;

    document.head.appendChild(mapElementScript);
    return mapElementScript;
  }
}
