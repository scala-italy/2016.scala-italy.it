import React from 'react';
import GoogleMapLoader from 'react-google-maps/lib/GoogleMapLoader';
import GoogleMap from 'react-google-maps/lib/GoogleMap';
import InfoWindow from 'react-google-maps/lib/InfoWindow';
import Marker from 'react-google-maps/lib/Marker';
import { props } from 'tcomb-react';
import { pure, skinnable } from 'revenge';
import { FlexView } from 'Basic';

import './map.scss';

@pure
@skinnable()
@props({ })
export default class Map extends React.Component {

  getLocals() {
    const marker = {
      position: {
        lat: 41.8966402,
        lng: 12.5035385
      },
      key: 'Radisson Blu Hotel',
      defaultAnimation: 2
    };

    const infoWindow = {
      content: (
        <div>
          <strong><a href='https://www.radissonblu.com/en/eshotel-rome' target='blank'>Radisson Blu Hotel</a></strong>
          <div>Via Filippo Turati, 171</div>
          <div>00185 Roma</div>
        </div>
      )
    };

    return { marker, infoWindow };
  }

  template({ marker, infoWindow }) {
    return (
      <FlexView column className='venue'>
        <FlexView hAlignContent='center'>
          <h3>VENUE</h3>
        </FlexView>
        <FlexView>
          <GoogleMapLoader
            containerElement={<div style={{ width: '100%' }} className='map' />}
            googleMapElement={(
              <GoogleMap
                defaultCenter={marker.position}
                defaultZoom={14}
                options={{ scrollwheel: false, draggable: false }}
              >
                <Marker {...marker}>
                  <InfoWindow>
                    {infoWindow.content}
                  </InfoWindow>
                </Marker>
              </GoogleMap>
            )}
          />
          <img className='venue-picture' height='400px' src={require('assets/images/radisson.jpg')} />
        </FlexView>
      </FlexView>
    );
  }
}
