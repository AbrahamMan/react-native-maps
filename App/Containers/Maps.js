import MapView, { Marker } from 'react-native-maps';
import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import tramthuphi from './tramthuphi.jpg';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const markers = [
  {
    latlng: {
      latitude: 21.08662197,
      longitude: 106.0869917
    },
    title: 'Trạm thu phí tự động',
    description: 'Trạm thu phí quộc lộ 38'
  },
  {
    latlng: {
      latitude: 21.09376895,
      longitude: 106.08186932
    },
    title: 'Trạm thu phí tự động',
    description: 'Trạm thu phí quộc lộ 38'
  }
]

export default class MyApp extends React.Component {
  render() {
    const { region } = this.props;

    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 21.09131844,
            longitude: 106.08282419,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        {markers.map(marker => (
          <Marker
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
            key={`${marker.latitude}-${marker.longitude}`}
          >
            <Image source={tramthuphi}
              style={{width: 20, height: 20}}
              alt="icon"/>
          </Marker>
        ))}
        </MapView>
      </View>
    );
  }
}