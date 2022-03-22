import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import 'font-awesome/css/font-awesome.min.css';
import './GoogleMap.css';

const AnyReactComponent = ({ lat, lng }) => {
  return <i className="fa fa-map-marker fa-3x" />
}

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 11
  };

  render() {
    return (
      <>
        <div style={{ height: '60vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GEOCODE_API_KEY }}
            center={{
              lat: this.props.lat[0],
              lng: this.props.lng[0]
            }}
            defaultZoom={this.props.zoom}
          >
            {
              this.props.lat &&
              this.props.lat.map((ele, i) => (
                <AnyReactComponent
                  key={this.props.lat[i]}
                  lat={this.props.lat[i]}
                  lng={this.props.lng[i]}
                  text="My Marker"
                />
              ))
            }
          </GoogleMapReact>
        </div>
      </>
    );
  }
}

export default SimpleMap;
