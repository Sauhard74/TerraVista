import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress, backgroundColor = "#007BFF", textColor = "#fff" }) => {
  return (
    <Pressable style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
