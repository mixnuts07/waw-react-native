import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const Start = (props) => {
  return (
    <View style={styles.container}>
      <Icon
        name="language"
        color="rgb(167,87,168)"
        size={80}
        style={styles.icon}
      ></Icon>
      <Image
        style={styles.waw}
        source={require("/Users/apple/waw/assets/waw.png")}
      />

      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate("ImageLiftup");
        }}
      >
        <Text style={styles.button}>Start</Text>
      </TouchableHighlight>
      <Image
        style={styles.chara}
        source={require("/Users/apple/waw/assets/chara.png")}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    alignItems: "center",
    padding: 50,
  },
  icon: {
    flex: 0.2,
    width: 80,
    height: 80,
    marginHorizontal: "auto",
    opacity: 0.5,
    alignSelf: "flex-end",
  },
  waw: {
    flex: 0.1,
    width: 100,
    height: 100,
    borderColor: "rgb(167,87,168)",
    borderWidth: 10,
    alignSelf: "flex-start",
  },
  button: {
    flex: 0.5,
    color: "rgba(167,87,168,0.8)",
    textShadowColor: "purple",
    fontSize: 60,
    fontWeight: "bold",
    letterSpacing: 5,
  },
  chara: {
    flex: 0.3,
    width: 100,
    height: 100,
    alignSelf: "flex-end",
  },
});

export default Start;
