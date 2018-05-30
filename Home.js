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
import AnimationView from "./AnimationView";
import PickerView from "./PickerView";
import FlatListView from "./FlatListView";

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

  _onForwardToAnimationView() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: AnimationView,
      title: "AnimationView " + nextIndex,
      passProps: { index: nextIndex }
    });
  }

  _onForwardToPickerView() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: PickerView,
      title: "PickerView " + nextIndex,
      passProps: { index: nextIndex }
    });
  }

  _onForwardToFlatListView() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: FlatListView,
      title: "FlatListView " + nextIndex,
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
        <Button
          onPress={() => {
            this._onForwardToAnimationView();
          }}
          title="Animation"
          color="#841584"
          accessibilityLabel="show Animation on tap"
        />
        <Button
          onPress={() => {
            this._onForwardToPickerView();
          }}
          title="Picker"
          color="#841584"
          accessibilityLabel="show Picker on tap"
        />
        <Button
          onPress={() => {
            this._onForwardToFlatListView();
          }}
          title="FlatList"
          color="#841584"
          accessibilityLabel="show FlatList on tap"
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
