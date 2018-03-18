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
  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Image source={require("./media/test.png")} />
            <Button
              title="Milk"
              onPress={() => this.props.navigation.navigate("Mohak")}
            >
              <View>
                <Text>Milk</Text>
              </View>
            </Button>
          </View>
          <View>
            <Image source={require("./media/test.png")} />
            <Button
              title="Milk"
              onPress={() => this.props.navigation.navigate("Mohak")}
            >
              <View>
                <Text>Milk</Text>
              </View>
            </Button>
          </View>
          <View>
            <Image source={require("./media/test.png")} />
            <Button
              title="Milk"
              onPress={() => this.props.navigation.navigate("Mohak")}
            >
              <View>
                <Text>Milk</Text>
              </View>
            </Button>
          </View>
        </ScrollView>
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
