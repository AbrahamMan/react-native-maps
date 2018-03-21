import MapView, { Marker } from 'react-native-maps';
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import tramthuphi from './tramthuphi.jpg';
import car from './car.png';
import { locations, markers } from './markerLocation';

const { width, height } = Dimensions.get('window');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGTITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

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
		borderRadius: 50 / 2,
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
		borderRadius: 20 / 2,
		overflow: 'hidden',
		backgroundColor: '#007AFF'
	}
});

export default class MyApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialPosition: {
				latitude: 0,
				longitude: 0,
				latitudeDelta: 0,
				longitudeDelta: 0
			},
			markerPosition: {
				latitude: 0,
				longitude: 0
			}
		}
	}

	watchID: ?number = null;

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat = parseFloat(position.coords.latitude);
			const long = parseFloat(position.coords.longitude);

			const initialRegion = {
				latitude: lat,
				longitude: long,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGTITUDE_DELTA
			}

			this.setState({ initialPosition: initialRegion });
			this.setState({ markerPosition: initialRegion });
		}, (error) => alert(JSON.stringify(error)),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })

			this.watchID = navigator.geolocation.watchPosition((position) => {
			const lat = parseFloat(position.coords.latitude);
			const long = parseFloat(position.coords.longitude);

			const lastRegion = {
				latitude: lat,
				longitude: long,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGTITUDE_DELTA
			}

			this.setState({ initialPosition: lastRegion });
			this.setState({ markerPosition: lastRegion });
		})
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID);
	}

	showMoving(locations) {
		return (
			locations && locations.map((locate) => (
				<Marker
					coordinate={locate.latlng}
					key={`${locate.latitude}-${locate.longitude}`}
					title='Car'
					description='Moving'
				>
					<Image source={car}
						style={{ width: 20, height: 20 }}
						alt="icon" />
					{/* <View style={styles.radius}>
							<View style={styles.marker}></View>
						</View> */}
				</Marker>
			))
		)
	}

	showBot(markers) {
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
					region={this.state.initialRegion}
				>
					<Marker
						coordinate = {this.state.initialPosition}
					>
					<View style={styles.radius}>
							<View style={styles.marker}></View>
						</View>
					</Marker>
					{/* {this.showBot(markers)}
					{this.showMoving(locations)} */}
				</MapView>
			</View>
		);
	}
}