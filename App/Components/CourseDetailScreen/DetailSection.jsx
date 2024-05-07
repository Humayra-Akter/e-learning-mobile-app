import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function DetailSection({ course }) {
  return (
    <View
      style={{
        padding: 10,
        borderRadius: 18,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={{ uri: course?.banner?.url }}
        style={{
          width: Dimensions.get("screen").width * 0.88,
          height: 190,
          borderRadius: 18,
        }}
      />
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 22,
          marginTop: 10,
        }}
      >
        {course?.name}
      </Text>
    </View>
  );
}
