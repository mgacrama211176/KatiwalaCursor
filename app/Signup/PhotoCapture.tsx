import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useNavigation } from "@react-navigation/native";

const PhotoCapture = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>("front");
  const navigation = useNavigation();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handleTakePhoto = async () => {
    navigation.navigate("WorkExperience");
  };

  return (
    <View style={{ flex: 1 }}>
      <CameraView style={{ flex: 1 }} facing={facing} />

      <TouchableOpacity
        style={styles.captureButtonContainer}
        onPress={handleTakePhoto}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Next Step</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },

  captureButtonContainer: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PhotoCapture;