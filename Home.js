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
import ScrollView from "./ScrollView";

type Props = {};
export default class App extends Component<Props> {
  _onForwardToProfile() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: Profile,
      title: "Profile " + nextIndex,
      passProps: { index: nextIndex }
    });
  }

  _onForwardToScrollView() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: ScrollView,
      title: "ScrollView " + nextIndex,
      passProps: { index: nextIndex }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            this._onForwardToProfile();
          }}
          title="Profile"
          color="#841584"
          accessibilityLabel="show Profile on tap"
        />
        <Button
          onPress={() => {
            this._onForwardToScrollView();
          }}
          title="ScrollView"
          color="#841584"
          accessibilityLabel="show ScrollView on tap"
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
