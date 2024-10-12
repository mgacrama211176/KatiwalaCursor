import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16, // Increase font size for better readability of phone numbers
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#007AFF",
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Add this line
    backgroundColor: "#3b5998",
    padding: 10,
    borderRadius: 5,
    width: "48%",
  },
  socialButtonText: {
    color: "white",
    marginLeft: 5,
    fontSize: 14, // Add this line to make the text slightly smaller
  },
  // Add these new styles
  createAccountContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  createAccountText: {
    color: "#007AFF",
    marginLeft: 5,
  },
});
