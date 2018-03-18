import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView } from "expo";
import Input from "./Input";


export default class Map extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: 37.7925,
            longitude: -122.4382
          }}
          title={"Van 1"}
          description={"items"}
        onPress={()=>this.props.navigation.navigate('Details')}
        />
        <MapView.Marker
          coordinate={{
            latitude: 37.78846,
            longitude: -122.4324
          }}
          title={"Van 2"}
          description={"items"}
        />
        <MapView.Marker
          coordinate={{
            latitude: 37.7599,
            longitude: -122.4148
          }}
          title={"Van 3"}
          description={"items"}
        />
        <Input />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
