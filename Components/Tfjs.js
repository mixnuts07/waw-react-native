// import * as tf from "@tensorflow/tfjs";
// //import * as mobilenet from '@tensorflow-models/mobilenet';
// import { fetch, decodeJpeg } from "@tensorflow/tfjs-react-native";
// import { View, Text, Button, Image } from "react-native";

// const Tfjs = () => {
//   console.log("Hey");

//   const LoadImage = async () => {
//     await tf.ready();
//     const model = await tf.loadGraphModel(
//       "/Users/apple/tmp/Model/binaryFiles/model.json"
//     );
//     const image = require("/Users/apple/tmp/assets/e10.jpeg");
//     console.log(1);
//     const imageAssetPath = Image.resolveAssetSource(image);
//     console.log(2);
//     const response = await fetch(imageAssetPath.uri, {}, { isBinary: true });
//     console.log(3);
//     const imageDataArrayBuffer = await response.arrayBuffer();
//     const imageData = new Uint8Array(imageDataArrayBuffer);
//     console.log(4);

//     const imageTensor = decodeJpeg(imageData).expandDims();
//     //.reshape([-1, -1, -1, 3]);
//     const floatImageTensor = tf.cast(imageTensor, "float32");
//     console.log(5);
//     const prediction = (await model.predict(floatImageTensor))[0];
//     console.log(6);
//     setState({
//       prediction,
//     });
//   };
//   return (
//     <View>
//       <Text>Hello</Text>
//       <Button onPress={LoadImage} title="Button">
//         Button
//       </Button>
//     </View>
//   );
// };

// export default Tfjs;

import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const ImagePickerSample = (props) => {
  return (
    <View style={styles.imagePickerStyle}>
      <View style={styles.container}>
        <Image
          source={{ uri: props.image }}
          style={{ width: 200, height: 200 }}
        />
        <Button title="ReTry" onPress={pickImage} />
        {/* "Try"はImagePickerの方に書いて、持ってきたImageの値がnullでなかったら表示にする！*/}
        <Button
          title="Try"
          onPress={() => {
            props.navigation.navigate("Srgan");
          }}
        />
      </View>
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

export default ImagePickerSample;
