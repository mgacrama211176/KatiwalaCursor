import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

interface Experience {
  company: string;
  position: string;
  years: string;
}

const WorkExperience = () => {
  const navigation = useNavigation();
  const [experiences, setExperiences] = useState<Experience[]>([
    { company: "", position: "", years: "" },
  ]);

  const addExperience = () => {
    setExperiences([...experiences, { company: "", position: "", years: "" }]);
  };

  const handleInputChange = (
    index: number,
    field: keyof Experience,
    value: string,
  ) => {
    const newExperiences = [...experiences];
    newExperiences[index][field] = value;
    setExperiences(newExperiences);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Experiences:", experiences);

    // Navigate to the next screen if needed
    // navigation.navigate("NextScreen");
  };

  // Add a header with the "+" button
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={addExperience} style={styles.addButton}>
          <Ionicons name="add" size={24} color="blue" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {experiences.map((experience, index) => (
          <View key={index} style={styles.experienceContainer}>
            <Text style={styles.label}>Company Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) =>
                handleInputChange(index, "company", value)
              }
              value={experience.company}
              placeholder="Enter your company name"
            />

            <Text style={styles.label}>Position</Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) =>
                handleInputChange(index, "position", value)
              }
              value={experience.position}
              placeholder="Enter your position"
            />

            <Text style={styles.label}>Years of Experience</Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) => handleInputChange(index, "years", value)}
              value={experience.years}
              placeholder="Enter years of experience"
              keyboardType="numeric"
            />
          </View>
        ))}
        <Button title="Submit" onPress={handleSubmit} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginTop: 12,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
    marginTop: 8,
  },
  addButton: {
    marginRight: 16,
  },
  experienceContainer: {
    marginBottom: 24,
  },
});

export default WorkExperience;
