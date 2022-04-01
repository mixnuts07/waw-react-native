import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import ImagePickerSample from "/Users/apple/waw/Components/ImagePickerSample.js";
import Srgan from "../Components/Srgan";
import storage from "/Users/apple/waw/Storage.js";

const ImageLiftup = (props) => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(`result  :${result}`);
    if (!result.cancelled) {
      console.log(`result.uri : ${result.uri}`);
      setImage(result.uri);
      console.log(`----------------------------------------------`);
      //Storage保存
      storage.save({
        key: "uploadImage",
        data: { resultId: result.uri },
      });
    }
  };
  //const [prediction, setPrediction] = useState(null);
  //const SaveImage = () => {};

  // const Saved = () => {};

  return (
    <View style={styles.imagePickerStyle}>
      {!image && <ImagePickerSample pickImage={() => pickImage()} />}
      {image && <Srgan navigation={props.navigation} />}
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    alignItems: "center",
    padding: 50,
  },
  imagePickerStyle: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    // },
    // button: {
    //   flex: 0.5,
    //   color: "rgba(167,87,168,0.8)",
    //   textShadowColor: "purple",
    //   fontSize: 60,
    //   fontWeight: "bold",
    //   letterSpacing: 5,
  },
};

export default ImageLiftup;
