import React from 'react';
import SliderComponent from '../SliderComponent';

// TODO: add name of hoc for debugging
export default (WrappedComponent, autoChange) => {
  return class extends React.Component {
    render() {
      return (
        <WrappedComponent
          sliderComponent={ <SliderComponent autoChange={autoChange}/> } {...this.props}/>
      );
    }
  }
};
