import MapView, { Marker } from 'react-native-maps';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import tramthuphi from './tramthuphi.jpg';
import car from './car.png';

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
		title: 'Hệ thống thu phí tự động',
		description: 'Trạm thu phí quộc lộ 38'
	},
	{
		latlng: {
			latitude: 21.11185855,
			longitude: 106.07821991
		},
		title: 'Hệ thống thu phí tự động',
		description: 'Trạm thu phí quộc lộ 38'
	}
]

const movements = [
	{
		latlng: {
			latitude: 21.083347,
			longitude: 106.09016429
		}
	},
	{
		latlng: {
			latitude: 21.08368784,
			longitude: 106.08984779
		}
	},
	{
		latlng: {
			latitude: 21.08391229,
			longitude: 106.08964628
		},
	},
	{
		latlng: {
			latitude: 21.08414186,
			longitude: 106.08943037
		},
	},
	{
		latlng: {
			latitude: 21.08439338,
			longitude: 106.08919567
		},
	},
	{
		latlng: {
			latitude: 21.08468274,
			longitude: 106.08893081
		},
	},
	{
		latlng: {
			latitude: 21.08496053,
			longitude: 106.08868003
		},
	},
	{
		latlng: {
			latitude: 21.08528779,
			longitude: 106.08838463
		},
	},
	{
		latlng: {
			latitude: 21.08566921,
			longitude: 106.08803405
		},
	},
	{
		latlng: {
			latitude: 21.0859395,
			longitude: 106.08777253
		},
	},
	{
		latlng: {
			latitude: 21.08610092,
			longitude: 106.08762367
		},
	},
	{
		latlng: {
			latitude: 21.08648507,
			longitude: 106.08726426
		},
	},

	{
		latlng: {
			latitude: 21.08690839,
			longitude: 106.0868669
		},
	},
	{
		latlng: {
			latitude: 21.08726651,
			longitude: 106.08652492
		},
	}, {
		latlng: {
			latitude: 21.0876144,
			longitude: 106.08620801
		},
	},
	{
		latlng:
			{
				latitude: 21.08840314,
				longitude: 106.08546269
			}
	}
]

export default class MyApp extends React.Component {

	showCar(locations) {
		return (
			locations && locations.map((locate) => {
				<Marker
					coordinate={locate.latlng}
					key={`${locate.latitude}-${locate.longitude}`}
				>
					<Image source={car}
						style={{ width: 20, height: 20 }}
						alt="icon" />
				</Marker>
			})
		)
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
					{markers.map(marker => (
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
					))}
				{movements.map(locate => (
					<Marker
						coordinate={locate.latlng}
						title='123'
						description='234'
						key={`${locate.latitude}-${locate.longitude}`}
					>
						<Image source={car}
							style={{ width: 20, height: 20 }}
							alt="icon" />
					</Marker>
				))}
				</MapView>
			</View>
		);
	}
}