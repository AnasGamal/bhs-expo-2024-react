

import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
class LocationMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMap = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const { google } = this.props;

    return (
      <div className="relative">
        <button
          onClick={this.toggleMap}
          className={`bg-blue-500 text-white px-2 py-2 rounded-md relative top-2 right-2 ${
            isOpen ? "ml-5 mb-5" : "mb-5 ml-5 hover:bg-orange-500" // Add padding class when isOpen is true
          }`}
        >
          {isOpen ? "Close Map" : "Open Map"}
        </button>

        <div
          className={`w-full ${
            isOpen ? "h-96 mb-20" : "hidden"
          } overflow-hidden`}
        >
          <Map
            google={google}
            zoom={14}
            initialCenter={{ lat: 40.7128, lng: -74.006 }}
          >
            <Marker position={{ lat: 40.7128, lng: -74.006 }} />
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey,
})(LocationMap);
