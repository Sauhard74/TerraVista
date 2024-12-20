import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import LoadingCard from "../../components/LoadingCard";

const LoadingListScreen = ({ navigation }) => {
  const [loadingTasks, setLoadingTasks] = useState([]);

  useEffect(() => {
    const fetchLoadingTasks = async () => {
      const tasks = [
        { id: "1", product: "Wheat", quantity: 500, status: "In Progress" },
        { id: "2", product: "Rice", quantity: 300, status: "Pending" },
      ];
      setLoadingTasks(tasks);
    };
    fetchLoadingTasks();
  }, []);

  const navigateToLoadingProcess = (taskId) => {
    navigation.navigate("LoadingProcessScreen", { taskId });
  };

  const renderTask = ({ item }) => (
    <LoadingCard
      product={item.product}
      quantity={item.quantity}
      status={item.status}
      onPress={() => navigateToLoadingProcess(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={loadingTasks}
        renderItem={renderTask}
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

export default LoadingListScreen;
