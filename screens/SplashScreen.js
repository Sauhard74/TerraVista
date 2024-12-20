import React, { useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    console.log("SplashScreen mounted");
    const timer = setTimeout(() => {
      console.log("Navigating to BuyerHomeScreen");
      navigation.navigate("BuyerHomeScreen");
    }, 2000);

    return () => {
      console.log("SplashScreen unmounted, clearing timer");
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TerraVista</Text>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text>Go to Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default SplashScreen;
