/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Modal,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";
import Profile from "./Profile";

type Props = {};
export default class App extends Component<Props> {
  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: Profile,
      title: "Profile " + nextIndex,
      passProps: { index: nextIndex }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            this._onForward();
          }}
          title="Profile"
          color="#841584"
          accessibilityLabel="show Profile on tap"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
