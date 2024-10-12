import { router } from "expo-router";

export const handleResetPassword = (phoneNumber: string) => {
  // Implement password reset logic here
  console.log("Reset password for:", phoneNumber);
  // After sending reset instructions, you might want to navigate back to login
  // router.push('/Login');
};

export const handleNavigateToLogin = () => {
  router.push("/Login");
};
