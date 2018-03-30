import MapView, { Marker } from 'react-native-maps';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import tramthuphi from './tramthuphi.jpg';
import car2 from './car2.png';
import { locations, markers } from './markerLocation';

let i = 0;

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

export default class MyApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			coordinate: {
				latitude: 0,
				longitude: 0
			}
		}
		this.showCar = this.showCar.bind(this);
		this.updateState = this.updateState.bind(this);

	}

	updateState() {
		if(i + 1 < locations.length) {
			if(this.state.coordinate.latitude === markers.latlng.latitude) {
				alert("Bạn vừa đi qua trạm thu phí BOT quốc lộ 38. Mức phí đã thu là 10000");
			}
			this.setState({ coordinate: locations[i++].latlng })
		}
	}

	showCar() {
		setTimeout(() => {
			this.updateState();
		}, 500)
	}

	showMarker(markers) {
		return (
			<Marker
				coordinate={markers.latlng}
				title={markers.title}
				description={markers.description}
				key={`${markers.latitude}-${markers.longitude}`}
			>
				<Image source={tramthuphi}
					style={{ width: 20, height: 20 }}
					alt="icon" />
			</Marker>
		);
	}
	render() {
		const { region } = this.props;
		this.showCar();
		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					region={{
						latitude: 21.09131844,
						longitude: 106.08282419,
						latitudeDelta: 0.0202,
						longitudeDelta: 0.0221,
					}}
				>
					{this.showMarker(markers)}
					<Marker
						coordinate={this.state.coordinate}
						title='Ô tô'
						description='Ô tô 4 chỗ ngồi'
						key={`${this.state.coordinate.latitude}-${this.state.coordinate.longitude}`}
					>
						<Image source={car2}
							style={{ width: 40, height: 40 }}
							alt="icon" />
					</Marker>
				</MapView>
			</View>
		);
	}
}