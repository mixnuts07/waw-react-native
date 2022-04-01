import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Fragment } from "react/cjs/react.production.min";

const Start = (props) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate("ImageLiftup");
        }}
      >
        <Fragment>
          <Icon
            name="aliwangwang-o1"
            color="rgba(8,120,0,0.6)"
            size={80}
            style={styles.icon}
          ></Icon>
          <Text style={styles.button}>Start</Text>
        </Fragment>
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
    backgroundColor: "rgba(110,128,128,0.9)",
    flex: 0.7,
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
    borderColor: "rgba(8,120,0,0.6)",
    borderWidth: 10,
    alignSelf: "flex-start",
  },
  button: {
    flex: 0.5,
    color: "rgba(8,120,0,0.6)",
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
