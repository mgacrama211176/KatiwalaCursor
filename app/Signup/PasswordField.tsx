import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PasswordFieldProps } from "./types";
import { styles } from "./styles";

export const PasswordField: React.FC<PasswordFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  showPassword,
  togglePasswordVisibility,
}) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={!showPassword}
    />
    <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
      <Ionicons
        name={showPassword ? "eye-off" : "eye"}
        size={24}
        color="gray"
      />
    </TouchableOpacity>
  </View>
);
