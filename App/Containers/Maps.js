import MapView, { Marker } from 'react-native-maps';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import tramthuphi from './tramthuphi.jpg';
import car from './car.png';
import { locations, markers } from './markerLocation';

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
	redius: {
		height: 50,
		width: 50,
		borderRadius: 50/2,
		overflow: 'hidden',
		backgroundColor: 'rgba(0, 122, 255, 0.1)',
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	maker: {
		height: 20,
		width: 20,
		borderWidth: 3,
		borderColor: 'white',
		borderRadius: 20/2,
		overflow: 'hidden',
		backgroundColor: '#007AFF'
	}
});

export default class MyApp extends React.Component {

	showCar(locations) {
		return (
			locations && locations.map((locate) => (
				<Marker
					coordinate={locate.latlng}
					key={`${locate.latitude}-${locate.longitude}`}
				>
					<Image source={car}
						style={{ width: 20, height: 20 }}
						alt="icon" />
						<View style={styles.radius}>
							<View style={styles.marker}></View>
						</View>
				</Marker>
			))
		)
	}

	showMarker(markers) {
		return (
			markers && markers.map(marker => (
				<Marker
					coordinate={marker.latlng}
					title={marker.title}
					description={marker.description}
					key={`${marker.latitude}-${marker.longitude}`}
				>
					<Image source={tramthuphi}
						style={{ width: 20, height: 20 }}
						alt="icon" />
				</Marker>
			))
		);
	}
	render() {
		const { region } = this.props;

		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					region={{
						latitude: 21.09131844,
						longitude: 106.08282419,
						latitudeDelta: 0.015,
						longitudeDelta: 0.0121,
					}}
				>
					{this.showMarker(markers)}
					{this.showCar(locations)}
				</MapView>
			</View>
		);
	}
}