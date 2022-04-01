import { View, Button, Image, Text, TouchableHighlight } from "react-native";
//import * as ImagePicker from "expo-image-picker";
import * as tf from "@tensorflow/tfjs";
import {
  fetch,
  decodeJpeg,
  bundleResourceIO,
} from "@tensorflow/tfjs-react-native";
import { Fragment, useState } from "react";
import storage from "../Storage";
//import ImageResizer from "react-image-resizer";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/AntDesign";
//----------Tensorflow.js--------------
let tmp = null;

const Predicted = (props) => {
  const [prediction, setPrediction] = useState(null);
  const SIZE = 128;
  const modelJson = require("/Users/apple/waw/assets/model/model.json");
  const modelWeights = require("/Users/apple/waw/assets/model/group1-shard.bin");
  storage
    .load({ key: "uploadImage" })
    .then((res) => (tmp = res.resultId))
    .then(() => {
      setPrediction(tmp);
    })
    .then(() => {
      LoadImage();
    })
    .catch((err) => console.warn(err));

  const LoadImage = async () => {
    await tf.ready();
    const model = await tf.loadGraphModel(
      bundleResourceIO(modelJson, modelWeights)
    );
    const image = { uri: tmp };
    console.log(1);
    console.log(`image:${image}`);
    //アセットへの参照を、uri, width, height の各プロパティを持つオブジェクトに解決する。
    const imageAssetPath = Image.resolveAssetSource(image);
    console.log(`imageAssetPath:${imageAssetPath}`);
    //imageのuri取得
    const response = await fetch(imageAssetPath.uri, {}, { isBinary: true });
    console.log(`response:${response}`);
    //固定長のバイナリデータバッファ → バイト配列を返す
    const imageDataArrayBuffer = await response.arrayBuffer();
    //JPEGエンコードされた画像をint32の３次元テンソルにデコードする
    const imageData = new Uint8Array(imageDataArrayBuffer);
    const imageTensor = decodeJpeg(imageData).expandDims(0);
    const imageResize = tf.image.resizeBilinear(imageTensor, [SIZE, SIZE]);
    //Tensorをcastしてfloatにする
    const ImageCastFloat = tf.cast(imageResize, "float32");
    console.log(`ImageCastFloat:${ImageCastFloat}`);
    console.log(`typeof ImageCastFloat:${typeof ImageCastFloat}`);
    const pred = await model.predict(ImageCastFloat);
    console.log(pred);
    // setState({
    //   prediction,
    // });
  };
  return (
    <View style={styles.container}>
      {/* <Image source={{ uri: prediction }} style={{ width: 50, height: 50 }} /> */}
      {/* <Image source={{ uri: response }} style={{ width: 50, height: 50 }} /> */}
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate("ImagePickerSample");
        }}
      >
        <Fragment>
          <Icon
            name="trash"
            color="rgba(8,120,0,0.6)"
            size={80}
            style={styles.icon}
          />
          <Text>ゴミ箱</Text>
        </Fragment>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate("Saved");
        }}
      >
        <Fragment>
          <Icon2
            name="download"
            color="rgba(8,120,0,0.6)"
            size={80}
            style={styles.icon}
          />
          <Text>保存</Text>
        </Fragment>
      </TouchableHighlight>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: "rgba(8,120,0,0.6)",
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

export default Predicted;
