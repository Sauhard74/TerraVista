import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ProfileIcon = ({ source, size = 50 }) => {
  return (
    <View style={[styles.container, { height: size, width: size }]}>
      <Image source={source} style={[styles.image, { height: size, width: size }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#ccc",
  },
  image: {
    resizeMode: "cover",
  },
});

export default ProfileIcon;
