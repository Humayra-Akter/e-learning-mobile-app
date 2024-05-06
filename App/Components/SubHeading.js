import { View, Text } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";

export default function SubHeading({ text, color = Colors.PRIMARY }) {
  return (
    <View>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 24,
          color: color,
          paddingLeft: 4,
        }}
      >
        {text}
      </Text>
    </View>
  );
}
