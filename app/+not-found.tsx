import React, { useEffect } from "react";
import { Link, Stack, router } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function NotFoundScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/Login");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <ThemedText type="default">
          Redirecting to login in 2 seconds...
        </ThemedText>
        <Link href="/Login" style={styles.link}>
          <ThemedText type="link">Go to login screen now</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
