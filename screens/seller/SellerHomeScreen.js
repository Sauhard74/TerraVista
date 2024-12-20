import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import OrderCard from "../../components/OrderCard";

const SellerHomeScreen = ({ navigation }) => {
  const [orders, setOrders] = useState([]);
  const sellerRegion = "Delhi";

  useEffect(() => {
    const fetchOrders = async () => {
      const fetchedOrders = [
        { id: "1", product: "Wheat", quantity: 500, region: "Delhi", price: 20000 },
        { id: "2", product: "Rice", quantity: 300, region: "Delhi", price: 15000 },
      ];
      setOrders(fetchedOrders.filter((order) => order.region === sellerRegion));
    };
    fetchOrders();
  }, []);

  const viewOrderDetails = (orderId) => {
    navigation.navigate("OrderDetailScreen", { orderId });
  };

  const renderOrder = ({ item }) => (
    <OrderCard
      product={item.product}
      quantity={item.quantity}
      region={item.region}
      price={item.price}
      onPress={() => viewOrderDetails(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderOrder}
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
});

export default SellerHomeScreen;
