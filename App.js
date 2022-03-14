import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "/Users/apple/waw/Screens/Start.js";
import Srgan from "/Users/apple/waw/Components/Srgan.js";
import ImagePickerSample from "/Users/apple/waw/Components/ImagePickerSample.js";
import Tfjs from "/Users/apple/waw/Components/Tfjs.js";
import ImageLiftup from "/Users/apple/waw/Screens/ImageLiftUp.js";

const Stack = createNativeStackNavigator();

const FirstScrren = () => {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgb(167,87,168)",
        },
      }}
    >
      <Stack.Screen name="Tfjs" component={Tfjs} />
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="ImageLiftup" component={ImageLiftup} />
      <Stack.Screen name="ImagePickerSample" component={ImagePickerSample} />
      <Stack.Screen name="Srgan" component={Srgan} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <FirstScrren />
    </NavigationContainer>
  );
};

export default App;
