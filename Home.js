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
import InputAccessoryView from "./InputAccessoryView";
import TextInputView from "./TextInputView";
import FlexBox from "./FlexBox";
import SectionListView from "./SectionListView";
import HandleTouch from "./HandleTouch";

type Props = {};
export default class App extends Component<Props> {
  _onForwardTo(destination, title) {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: destination,
      title: `${title} nextIndex`,
      passProps: { index: nextIndex }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            this._onForwardTo(Profile, "Profile");
          }}
          title="Profile"
          color="#841584"
          accessibilityLabel="show Profile on tap"
        />
        <Button
          onPress={() => {
            this._onForwardTo(ScrollView, "ScrollView");
          }}
          title="ScrollView"
          color="#841584"
          accessibilityLabel="show ScrollView on tap"
        />
        <Button
          onPress={() => {
            this._onForwardTo(AnimationView, "AnimationView");
          }}
          title="Animation"
          color="#841584"
          accessibilityLabel="show Animation on tap"
        />
        <Button
          onPress={() => {
            this._onForwardTo(PickerView, "PickerView");
          }}
          title="Picker"
          color="#841584"
          accessibilityLabel="show Picker on tap"
        />
        <Button
          onPress={() => {
            this._onForwardTo(FlatListView, "FlatListView");
          }}
          title="FlatList"
          color="#841584"
          accessibilityLabel="show FlatList on tap"
        />
        <Button
          onPress={() => {
            this._onForwardTo(InputAccessoryView, "InputAccessoryView");
          }}
          title="InputAccessory"
          color="#841584"
          accessibilityLabel="show InputAccessory on tap"
        />
        <Button
          onPress={() => {
            this._onForwardTo(TextInputView, "TextInputView");
          }}
          title="TextInput"
          color="#841584"
          accessibilityLabel="show TextInput on tap"
        />
        <Button
          onPress={() => {
            this._onForwardTo(FlexBox, "FlexBox");
          }}
          title="FlexBox"
          color="#841584"
          accessibilityLabel="show FlexBox on tap"
        />
        <Button
          onPress={() => {
            this._onForwardTo(SectionListView, "SectionListView");
          }}
          title="SectionList"
          color="#841584"
          accessibilityLabel="show SectionList on tap"
        />
        <Button
          onPress={() => {
            this._onForwardTo(HandleTouch, "HandleTouch");
          }}
          title="HandleTouch"
          color="#841584"
          accessibilityLabel="show HandleTouch on tap"
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
