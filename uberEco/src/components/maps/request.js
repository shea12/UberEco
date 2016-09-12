import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  MapView
} from 'react-native';

var Button = require('../common/button');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      location: {
        latitude: 0,
        longitude: 0
      }
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        
        <View style={styles.top}>
          <Text style={styles.subheader}>Enter Destination</Text>
          <TextInput style={styles.input} />
        </View>

        <MapView
          style={styles.map}
          onRegionChangeComplete={this.onRegionChangeComplete}
          annotations={[this.state.location]}
          showsUserLocation={true}
          followUserLocation={true}
          scrollEnabled={false}
          zoomEnabled={false}
        />

        <View style={styles.bottom}>
          <Button text={'request ride'} onPress={this.onRequestPress} />
        </View>
     
      </View>
    );
  },
  onRegionChangeComplete: function(region) {
    this.setState({
      location: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    });
  },
  onRequestPress: function() {
<<<<<<< HEAD
    this.props.navigator.push({name: 'navigation'});
=======
    var origin = {
      lat: this.state.annotation.latitude,
      lon: this.state.annotation.longitude
    }
    var destination = {
      lat: this.state.destination.position.lat,
      lon: this.state.destination.position.lng
    }
    console.log(origin, destination);

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    
    fetch('http://104.131.158.94:3000/api/navigation', {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({
        currentLocation: origin,
        destination: destination
      })
    })
      .then((response) => {
        console.log(response);
        this.props.navigator.push({name: 'navigation'});
      })
      .catch((error) => {
        console.log('error :(');
      });
>>>>>>> aa34dba8dee032477010fc9c3ea845525cf1c3d4
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 2
  },
  map: {
    flex: 11
  },
  bottom: {
    flex: 1,
    backgroundColor: '#5cb85c'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 300,
    alignSelf: 'center'
  },
  subheader: {
    fontSize: 20,
    color: '#555',
    alignSelf: 'center',
    marginTop: 20
  }
});