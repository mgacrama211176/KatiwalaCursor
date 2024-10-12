import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const SignupLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PhotoCapture"
          options={{
            headerShown: true,
            title: "Take a Photo",
          }}
        />
      </Stack>
    </SafeAreaView>
  );
};

export default SignupLayout;
