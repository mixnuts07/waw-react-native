import { View, Button, Image, TouchableHighlight, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Fragment, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";

const ImagePickerSample = ({ pickImage }) => {
  return (
    <View style={styles.imagePickerStyle}>
      <TouchableHighlight onPress={() => pickImage()}>
        <Fragment>
          <Icon
            name="upload"
            color="rgba(8,120,0,0.6)"
            size={80}
            style={styles.icon}
          ></Icon>
          <Text>画像を選択</Text>
        </Fragment>
      </TouchableHighlight>
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

export default ImagePickerSample;

// import { View, Button, Image } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import { useState } from "react";

// const ImagePickerSample = (props) => {
//   const [image, setImage] = useState(null);
//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.uri);
//       console.log(`1image: ${{ image }}`);
//       console.log(`1image: ${{ uri: image }}`);
//       console.log(`2result:uri : ${result.uri}`);
//     }
//   };

//   return (
//     <View style={styles.imagePickerStyle}>
//       {!image && (
//         <Button title="Pick an image from camera roll" onPress={pickImage} />
//       )}
//       {image && (
//         <View style={styles.container}>
//           <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
//           <Button title="ReTry" onPress={pickImage} />
//           {/* "Try"はImagePickerの方に書いて、持ってきたImageの値がnullでなかったら表示にする！*/}
//           <Button
//             title="Try"
//             onPress={() => {
//               props.navigation.navigate("Srgan");
//             }}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = {
//   container: {
//     backgroundColor: "lightblue",
//     flex: 1,
//     alignItems: "center",
//     padding: 50,
//   },
//   imagePickerStyle: {
//     flex: 0.5,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   button: {
//     flex: 0.5,
//     color: "rgba(167,87,168,0.8)",
//     textShadowColor: "purple",
//     fontSize: 60,
//     fontWeight: "bold",
//     letterSpacing: 5,
//   },
// };

// export default ImagePickerSample;
