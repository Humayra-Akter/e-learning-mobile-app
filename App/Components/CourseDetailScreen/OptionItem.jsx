import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function OptionItem({ item, value }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginTop: 6,
        paddingLeft: 4,
      }}
    >
      <Ionicons name="book-outline" size={24} color="#000" />
      <Text style={{ color: "black", fontFamily: "outfit-medium" }}>
        {value}
      </Text>
    </View>
  );
}
