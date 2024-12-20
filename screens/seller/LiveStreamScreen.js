import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LiveStreamScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Stream</Text>
      <View style={styles.streamContainer}>
        <Text style={styles.streamPlaceholder}>Live Stream Video Here</Text>
        {/* Replace this placeholder with a video player component */}
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Product: Wheat</Text>
        <Text style={styles.detailText}>Quantity: 500kg</Text>
        <Text style={styles.detailText}>Status: In Progress</Text>
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
});

export default LiveStreamScreen;
