import React, { Component } from "react";
import { View, Picker } from "react-native";

export default class PickerView extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      language: "js"
    };
  }

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}
