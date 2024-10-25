import { router } from "expo-router";
import { Alert } from "react-native";

export const handleSignup = (
  name: string,
  phoneNumber: string,
  password: string,
  verifyPassword: string,
) => {
  if (password !== verifyPassword) {
    Alert.alert("Error", "Passwords do not match");
    return;
  }

  if (!/^\d+$/.test(phoneNumber)) {
    Alert.alert("Error", "Phone number should contain only numbers");
    return;
  }

  // Implement signup logic here
  console.log("Signup with:", name, phoneNumber, password);

  // Navigate to PhotoCapture screen
  router.push("/Signup/PhotoCapture");
};

export const handleNavigateToLogin = () => {
  router.push("/Login");
};
