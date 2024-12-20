import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";

const LoadingProcessScreen = ({ route, navigation }) => {
  const { taskId } = route.params; // Passed from LoadingListScreen
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    console.log(`Loading Progress Updated: ${progress}%`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loading Process</Text>
      <Text style={styles.detailText}>Task ID: {taskId}</Text>
      <Text style={styles.detailText}>Product: Wheat</Text>
      <Text style={styles.detailText}>Quantity: 500kg</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Progress: {progress}%</Text>
        <Pressable style={styles.updateButton} onPress={updateProgress}>
          <Text style={styles.buttonText}>Update Progress</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  progressContainer: {
    marginTop: 20,
  },
  progressText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  updateButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoadingProcessScreen;
