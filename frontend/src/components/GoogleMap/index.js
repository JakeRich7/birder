import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import 'font-awesome/css/font-awesome.min.css';
import './GoogleMap.css';

const Marker = () => {
  return <i className="fa fa-map-marker fa-3x" />
}

const Message = () => {
  return <div className='google-map-message'>The address for this sighting is invalid</div>
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
              lat: this.props.lat,
              lng: this.props.lng
            }}
            defaultZoom={this.props.zoom}
          >
            {
              this.props.lat &&
              <>
                <Marker
                  lat={this.props.lat}
                  lng={this.props.lng}
                />
                {
                  this.props.message &&
                  <Message
                    lat={this.props.lat}
                    lng={this.props.lng}
                  />
                }
              </>
            }
          </GoogleMapReact>
        </div>
      </>
    );
  }
}

export default SimpleMap;
