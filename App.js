import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./Screens/Header";
import Start from "/Users/apple/waw/Screens/Start.js";
import Srgan from "/Users/apple/waw/Components/Srgan.js";
import ImagePickerSample from "/Users/apple/waw/Components/ImagePickerSample.js";
import Predicted from "/Users/apple/waw/Components/Predicted.js";
import ImageLiftup from "/Users/apple/waw/Screens/ImageLiftUp.js";
import { View } from "react-native";
import Saved from "/Users/apple/waw/Components/Saved.js";
//import firebase from "/Users/apple/waw/firebase.js";
// import Amplify from "aws-amplify";
// import awsconfig from "./src/aws-exports";
// Amplify.configure(awsconfig);

const Stack = createNativeStackNavigator();
const FirstScrren = () => {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        //headerShown: false,
        headerStyle: {
          backgroundColor: "rgba(110,128,128,0.9)",
        },
      }}
    >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="ImageLiftup" component={ImageLiftup} />
      <Stack.Screen name="ImagePickerSample" component={ImagePickerSample} />
      <Stack.Screen name="Srgan" component={Srgan} />
      <Stack.Screen name="Predicted" component={Predicted} />
      <Stack.Screen name="Saved" component={Saved} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <FirstScrren />
    </NavigationContainer>
  );
};

export default App;
