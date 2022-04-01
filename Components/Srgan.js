import React, { Fragment, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import storage from "/Users/apple/waw/Storage.js";
import Icon from "react-native-vector-icons/Octicons";

let tmp = null;
const Srgan = ({ navigation }) => {
  const [upload, setUpload] = useState(null);
  //console.log(`storage :: ${JSON.stringify(storage, null, 4)}`);
  storage
    .load({ key: "uploadImage" })
    .then((res) => (tmp = res.resultId))
    .then(() => {
      setUpload(tmp);
    })
    .catch((err) => console.warn(err));
  return (
    <View style={styles.container}>
      <Image source={{ uri: upload }} style={{ width: 50, height: 50 }} />
      <Text>{upload}</Text>
      <Icon
        name="triangle-left"
        color="rgba(8,120,0,0.6)"
        size={80}
        style={styles.icon}
      ></Icon>

      <TouchableHighlight
        onPress={() => {
          navigation.navigate("Predicted");
          //<Predicted />;
        }}
      >
        <Fragment>
          <Icon
            name="triangle-right"
            color="rgba(8,120,0,0.6)"
            size={80}
            style={styles.icon}
          ></Icon>
          <Text>決定</Text>
        </Fragment>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(110,128,128,0.9)",
    flex: 1,
    alignItems: "center",
  },
  icon: {
    flex: 0.8,
    width: 100,
    height: 100,
    bottom: 20,
    flexDirection: "row",
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

export default Srgan;
