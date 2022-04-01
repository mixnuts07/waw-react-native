import { View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Icon
        name="language"
        color="rgba(8,120,0,0.6)"
        size={80}
        style={styles.icon}
      ></Icon>
      <Image
        style={styles.waw}
        source={require("/Users/apple/waw/assets/waw.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(110, 128, 128, 0.9)",
    flex: 0.1,
    alignItems: "center",
    padding: 50,
  },
  icon: {
    flex: 0.8,
    width: 80,
    height: 80,
    marginHorizontal: "auto",
    opacity: 0.5,
    alignSelf: "flex-end",
  },
  waw: {
    flex: 0.8,
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

export default Header;
