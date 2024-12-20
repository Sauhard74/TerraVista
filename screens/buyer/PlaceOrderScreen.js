import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const PlaceOrderScreen = ({ navigation }) => {
  const [quantity, setQuantity] = useState("");
  const [quality, setQuality] = useState("");
  const [region, setRegion] = useState("");
  const [loadingDate, setLoadingDate] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");

  const handleOrderPlacement = () => {
    // Logic to submit order details to Supabase
    console.log("Placing Order:", {
      quantity,
      quality,
      region,
      loadingDate,
      deliveryLocation,
    });
    navigation.goBack(); // Go back to Buyer Home Screen after order placement
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Place an Order</Text>
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
      />
      <TextInput
        style={styles.input}
        placeholder="Quality Type"
        value={quality}
        onChangeText={setQuality}
      />
      <TextInput
        style={styles.input}
        placeholder="Region"
        value={region}
        onChangeText={setRegion}
      />
      <TextInput
        style={styles.input}
        placeholder="Loading Date"
        value={loadingDate}
        onChangeText={setLoadingDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Delivery Location"
        value={deliveryLocation}
        onChangeText={setDeliveryLocation}
      />
      <Pressable style={styles.button} onPress={handleOrderPlacement}>
        <Text style={styles.buttonText}>Submit Order</Text>
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

export default PlaceOrderScreen;
