import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Buyer"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#f8f8f8" },
        tabBarActiveTintColor: "#007BFF",
        tabBarInactiveTintColor: "#666",
      }}
    >
      <Tab.Screen
        name="Buyer"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Seller"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="store" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
