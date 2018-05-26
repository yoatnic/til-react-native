import React from "react";
import { Platform, NavigatorIOS } from "react-native";

import Home from "./Home";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Home,
          title: "My Initial Scene",
          passProps: { index: 1 }
        }}
        style={{ flex: 1 }}
      />
    );
  }
}
