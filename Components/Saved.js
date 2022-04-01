import { View, Text, StyleSheet } from "react-native";
import storage from "../Storage";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Entypo";

const Saved = () => {
  return (
    <View>
      <Icon
        name="checkcircle"
        color="rgba(8,120,0,0.6)"
        size={80}
        style={styles.icon}
      />
      <Text>保存しました</Text>
      <Icon2
        name="triangle-left"
        color="rgba(8,120,0,0.6)"
        size={80}
        style={styles.icon}
      />
      <Text>TOP</Text>
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

export default Saved;
