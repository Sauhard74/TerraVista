import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";

const LoadingMonitorScreen = () => {
  const [manualCount, setManualCount] = useState("");
  const loadingStatus = "In Progress"; // This can be fetched dynamically

  const submitCount = () => {
    console.log("Manual Count Submitted:", manualCount);
    // Logic to submit manual count
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loading Monitor</Text>
      <View style={styles.streamContainer}>
        <Text style={styles.streamPlaceholder}>Live Video Stream</Text>
        {/* Replace with a video player component */}
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Status: {loadingStatus}</Text>
        <Text style={styles.detailText}>Order Details: 500kg, Wheat</Text>
      </View>
      <View style={styles.manualCountContainer}>
        <Text style={styles.countLabel}>Manual Count:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter count"
          value={manualCount}
          onChangeText={setManualCount}
          keyboardType="numeric"
        />
        <Pressable style={styles.submitButton} onPress={submitCount}>
          <Text style={styles.buttonText}>Submit</Text>
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
  streamContainer: {
    height: 200,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  streamPlaceholder: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  manualCountContainer: {
    marginTop: 20,
  },
  countLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  submitButton: {
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

export default LoadingMonitorScreen;
