import React from 'react';
import RoomBookFormComponent from "../forms/RoomBookFormComponent";

// TODO: add name of hoc for debugging
export default (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <WrappedComponent
          bookFormComponent={ <RoomBookFormComponent/> } {...this.props}/>
      );
    }
  }
};
