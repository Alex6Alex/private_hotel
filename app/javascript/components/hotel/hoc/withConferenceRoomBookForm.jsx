import React from 'react';
import ConferenceRoomBookFormComponent from "../forms/ConferenceRoomBookFormComponent";

// TODO: add name of hoc for debugging
export default (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <WrappedComponent
          bookFormComponent={ <ConferenceRoomBookFormComponent/> } {...this.props}/>
      );
    }
  }
};
