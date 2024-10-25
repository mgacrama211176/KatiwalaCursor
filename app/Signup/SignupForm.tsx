import React, { useState } from "react";
import { View } from "react-native";
import { FormData } from "./types";
import { InputField } from "./InputField";
import { PasswordField } from "./PasswordField";
import { Button } from "./Button";
import { styles } from "./styles";

interface SignupFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSignup: () => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({
  formData,
  setFormData,
  onSignup,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
    if (field === "phoneNumber") {
      console.log(value);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <View>
      <InputField
        placeholder="Full Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange("name", value)}
      />
      <InputField
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChangeText={(value) => handleInputChange("phoneNumber", value)}
        keyboardType="phone-pad"
        maxLength={13}
      />
      <PasswordField
        placeholder="Password"
        value={formData.password}
        onChangeText={(value) => handleInputChange("password", value)}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
      />
      <PasswordField
        placeholder="Verify Password"
        value={formData.verifyPassword}
        onChangeText={(value) => handleInputChange("verifyPassword", value)}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
      />
      <Button title="Next Step" onPress={onSignup} />
    </View>
  );
};
