import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import BuyerRegistrationScreen from "../screens/buyer/BuyerRegistrationScreen";
import BuyerHomeScreen from "../screens/buyer/BuyerHomeScreen";
import PlaceOrderScreen from "../screens/buyer/PlaceOrderScreen";
import BuyerBidsScreen from "../screens/buyer/BuyerBidsScreen";
import LoadingMonitorScreen from "../screens/buyer/LoadingMonitorScreen";
import SellerRegistrationScreen from "../screens/seller/SellerRegistrationScreen";
import SellerHomeScreen from "../screens/seller/SellerHomeScreen";
import OrderDetailScreen from "../screens/seller/OrderDetailScreen";
import LoadingListScreen from "../screens/seller/LoadingListScreen";
import LoadingProcessScreen from "../screens/seller/LoadingProcessScreen";
import LiveStreamScreen from "../screens/seller/LiveStreamScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      {/* Common Screens */}
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />

      {/* Buyer Screens */}
      <Stack.Screen
        name="BuyerRegistrationScreen"
        component={BuyerRegistrationScreen}
        options={{ title: "Buyer Registration" }}
      />
      <Stack.Screen
        name="BuyerHomeScreen"
        component={BuyerHomeScreen}
        options={{ title: "Buyer Home" }}
      />
      <Stack.Screen
        name="PlaceOrderScreen"
        component={PlaceOrderScreen}
        options={{ title: "Place Order" }}
      />
      <Stack.Screen
        name="BuyerBidsScreen"
        component={BuyerBidsScreen}
        options={{ title: "Bids" }}
      />
      <Stack.Screen
        name="LoadingMonitorScreen"
        component={LoadingMonitorScreen}
        options={{ title: "Loading Monitor" }}
      />

      {/* Seller Screens */}
      <Stack.Screen
        name="SellerRegistrationScreen"
        component={SellerRegistrationScreen}
        options={{ title: "Seller Registration" }}
      />
      <Stack.Screen
        name="SellerHomeScreen"
        component={SellerHomeScreen}
        options={{ title: "Seller Home" }}
      />
      <Stack.Screen
        name="OrderDetailScreen"
        component={OrderDetailScreen}
        options={{ title: "Order Details" }}
      />
      <Stack.Screen
        name="LoadingListScreen"
        component={LoadingListScreen}
        options={{ title: "Loading Tasks" }}
      />
      <Stack.Screen
        name="LoadingProcessScreen"
        component={LoadingProcessScreen}
        options={{ title: "Loading Process" }}
      />
      <Stack.Screen
        name="LiveStreamScreen"
        component={LiveStreamScreen}
        options={{ title: "Live Stream" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
