import { router } from "expo-router";

export const handleLogin = (phoneNumber: string, password: string) => {
  // Implement login logic here
  console.log("Login with:", phoneNumber, password);
};

export const handleFacebookLogin = () => {
  // Implement Facebook login logic here
  console.log("Login with Facebook");
};

export const handleGoogleLogin = () => {
  // Implement Google login logic here
  console.log("Login with Google");
};

export const handleForgotPassword = (phoneNumber: any) => {
  router.push("/ForgotPassword");
};

export const handleCreateAccount = () => {
  // Navigate to the Signup screen
  router.push("/Signup");
};
