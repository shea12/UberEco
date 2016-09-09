import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';

var { width, height } = Dimensions.get('window');

module.exports = React.createClass({
	getInitialState: function() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
	},
  render: function() {

    //need markers on the map for:
      // 1. current location
      // 2. station 1 location
      // 3. station 2 location
      // 4. destination location

  	return (
      <View style={styles.container}>
      	<MapView 
          style={styles.map}
      	  initialRegion={this.state.region}
        >
          <MapView.Marker
            coordinate={{latitude: 37.789182, longitude: -122.401493}}
            title={'new marker'}
            description={'this is a new marker'}
          />
        </MapView>
        <View style={styles.directions}>
          <Text>Directions</Text>

          <Text>Current Location to Station A
                Distance: 
          </Text>

          <Text>Station A to Station B
                Distance: 
          </Text>

          <Text>Station B to Destination
                Distance: 
          </Text>

        </View>
      </View>
  	);
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: height * (1 / 3),
  },
  directions: {
    position: 'absolute',
    top: height * (2 / 3),
    left: 0,
    right: 0,
    bottom: 0,
  }
});