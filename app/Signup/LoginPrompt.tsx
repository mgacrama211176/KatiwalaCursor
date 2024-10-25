import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LoginPromptProps } from "./types";
import { styles } from "./styles";

export const LoginPrompt: React.FC<LoginPromptProps> = ({ onPress }) => (
  <View style={styles.loginContainer}>
    <Text>Already have an account?</Text>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>
  </View>
);
