import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const BuyerHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Buyer</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("PlaceOrderScreen")}
      >
        <Text style={styles.buttonText}>Place an Order</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("BuyerBidsScreen")}
      >
        <Text style={styles.buttonText}>View Bids</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("LoadingMonitorScreen")}
      >
        <Text style={styles.buttonText}>Loading Monitor</Text>
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
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BuyerHomeScreen;
