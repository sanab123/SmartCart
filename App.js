import React from "react";
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  Button
} from "react-native";
import Map from "./components/Map";
import Input from "./components/Input";
import { StackNavigator } from "react-navigation";

import { MapView } from "expo";
class HomeScreen extends React.Component {
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
          onPress={() => this.props.navigation.navigate("Details")}
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
        />{" "}
      </MapView>
    );
  }
}
class DetailsScreen extends React.Component {
  state={list: [
    {
      name: 'Milk',
      avatar_url: 'https://img1.cgtrader.com/items/717115/a69ed5d165/milk-carton-3d-model-obj-fbx-blend.png',
      key:1
    },
    {
      name: 'Cereal',
      avatar_url: 'https://www.dollargeneral.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/c/o/compressed_19110101_hbo_strawberry_cereal.jpg',
      key:2
    },
    {
      name: 'Lays',
      avatar_url: 'https://www.fritolay.com/images/default-source/blue-bag-image/lays-classic.png?sfvrsn=bd1e563a_2',
      key:3
    },
    {
      name: 'Milk',
      avatar_url: 'https://img1.cgtrader.com/items/717115/a69ed5d165/milk-carton-3d-model-obj-fbx-blend.png',
      key:4
    },
  ]}
  render() {
    return (
      <View>
        <Text>details Screen</Text>
        <ScrollView>
        {
          this.state.list.map((item)=>{
            return <Text>{item.name}</Text>
          })
        }
        </ScrollView>
        <Button
          title="Go to details"
          onPress={() => this.props.navigation.navigate("Mohak")}
        />
      </View>
    );
  }
}
class MohakScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>details Screen</Text>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    },
    Mohak: {
      screen: MohakScreen
    }
  },
  { initialRouteName: "Home" }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
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
