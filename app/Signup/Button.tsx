import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "./types";
import { styles } from "./styles";

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);
