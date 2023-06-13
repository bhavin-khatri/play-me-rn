/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CoreAppStack } from "./src/navigation/CoreAppStack";
import { navigationRef } from "./src/navigation/Navigator";

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer
        theme={{ colors: { background: "#000" } }}
        ref={navigationRef}
      >
        <CoreAppStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};
