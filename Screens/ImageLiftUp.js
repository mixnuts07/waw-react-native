import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import ImagePickerSample from "/Users/apple/waw/Components/ImagePickerSample.js";
import Tfjs from "/Users/apple/waw/Components/Tfjs.js";

const ImageLiftup = () => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      //setImage(result.uri);
      //console.log(`1image: ${{ props.image }}`);
      console.log(`1image: ${{ uri: image }}`);
      console.log(`2result:uri : ${result.uri}`);
    }
  };

  return (
    <View style={styles.imagePickerStyle}>
      {!image && (
        <ImagePickerSample value={image} pickImage={() => pickImage()} />
      )}
      {image && <Tfjs tfjsImage={image} />}
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
  },
  button: {
    flex: 0.5,
    color: "rgba(167,87,168,0.8)",
    textShadowColor: "purple",
    fontSize: 60,
    fontWeight: "bold",
    letterSpacing: 5,
  },
};

export default ImageLiftup;
