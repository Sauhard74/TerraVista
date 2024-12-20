import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";

const BuyerBidsScreen = ({ navigation }) => {
  const [bids, setBids] = useState([]);

  // Simulate fetching bids from Supabase
  useEffect(() => {
    const fetchBids = async () => {
      const fetchedBids = [
        { id: "1", price: 2000, product: "Wheat", region: "Delhi" },
        { id: "2", price: 1500, product: "Rice", region: "Mumbai" },
      ];
      setBids(fetchedBids);
    };
    fetchBids();
  }, []);

  const acceptBid = (bidId) => {
    console.log("Bid Accepted:", bidId);
    // Logic to accept the bid and notify the seller
  };

  const counterBid = (bidId) => {
    console.log("Counter Offer Initiated:", bidId);
    // Logic to counter the bid via chat or form
  };

  const renderBid = ({ item }) => (
    <View style={styles.bidCard}>
      <Text style={styles.bidText}>Product: {item.product}</Text>
      <Text style={styles.bidText}>Price: ₹{item.price}</Text>
      <Text style={styles.bidText}>Region: {item.region}</Text>
      <View style={styles.actions}>
        <Pressable style={styles.acceptButton} onPress={() => acceptBid(item.id)}>
          <Text style={styles.buttonText}>Accept</Text>
        </Pressable>
        <Pressable style={styles.counterButton} onPress={() => counterBid(item.id)}>
          <Text style={styles.buttonText}>Counter</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bids Received</Text>
      <FlatList
        data={bids}
        renderItem={renderBid}
        keyExtractor={(item) => item.id}
      />
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
  bidCard: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  bidText: {
    fontSize: 16,
    marginBottom: 5,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  acceptButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  counterButton: {
    backgroundColor: "#ffc107",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default BuyerBidsScreen;
