import React from "react";
import { View, TextInput } from "react-native";
import { InputFieldProps } from "./types";
import { styles } from "./styles";

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  ...props
}) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  </View>
);
