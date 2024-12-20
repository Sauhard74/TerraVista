import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderCard = ({ product, quantity, region, price, status }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Product: {product}</Text>
      <Text style={styles.text}>Quantity: {quantity}kg</Text>
      <Text style={styles.text}>Region: {region}</Text>
      <Text style={styles.text}>Price: ₹{price}</Text>
      {status && <Text style={styles.text}>Status: {status}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default OrderCard;
