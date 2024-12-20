import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const BuyerRegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Registering buyer:", { name, phone, region });
    navigation.navigate("BuyerHomeScreen");
  };

  return (
    <View style={styles.container}>
      <InputField
        label="Full Name"
        value={name}
        onChangeText={setName}
        placeholder="Enter your full name"
      />
      <InputField
        label="Phone Number"
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />
      <InputField
        label="Region"
        value={region}
        onChangeText={setRegion}
        placeholder="Enter your region"
      />
      <InputField
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
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

export default BuyerRegistrationScreen;
