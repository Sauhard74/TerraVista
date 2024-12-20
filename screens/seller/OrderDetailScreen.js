import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const OrderDetailScreen = ({ route, navigation }) => {
  const { orderId } = route.params; // Passed from SellerHomeScreen
  const [priceQuote, setPriceQuote] = useState("");
  const [image, setImage] = useState(""); // Implement image upload later

  const handleSubmitQuote = () => {
    console.log("Submitting Quote for Order ID:", orderId, "Price:", priceQuote);
    navigation.goBack(); // Navigate back to SellerHomeScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Details</Text>
      <Text style={styles.detailText}>Order ID: {orderId}</Text>
      <Text style={styles.detailText}>Product: Wheat</Text>
      <Text style={styles.detailText}>Quantity: 500kg</Text>
      <Text style={styles.detailText}>Region: Delhi</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Price Quote"
        value={priceQuote}
        onChangeText={setPriceQuote}
        keyboardType="numeric"
      />
      <Pressable style={styles.button} onPress={handleSubmitQuote}>
        <Text style={styles.buttonText}>Submit Quote</Text>
      </Pressable>
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
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

export default OrderDetailScreen;
