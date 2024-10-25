import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { handleSignup, handleNavigateToLogin } from "./handlers";
import { FormData } from "./types";
import { SignupForm } from "./SignupForm";
import { LoginPrompt } from "./LoginPrompt";

const SignupScreen: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    password: "",
    verifyPassword: "",
  });

  const onSignup = () => {
    const { name, phoneNumber, password, verifyPassword } = formData;
    handleSignup(name, phoneNumber, password, verifyPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <SignupForm
        formData={formData}
        setFormData={setFormData}
        onSignup={onSignup}
      />
      <LoginPrompt onPress={handleNavigateToLogin} />
    </View>
  );
};

export default SignupScreen;
