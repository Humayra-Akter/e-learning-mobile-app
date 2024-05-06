import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CourseItem({ item }) {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: Colors.WHITE,
        marginRight: 14,
        borderRadius: 16,
        borderColor: Colors.WHITE,
        borderWidth: 2,
      }}
    >
      <Image
        source={{ uri: item?.banner?.url }}
        style={{
          width: 210,
          borderRadius: 10,
          height: 120,
        }}
      />
      <View style={{ padding: 4 }}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 16,
            color: Colors.BLACK,
          }}
        >
          {item?.name}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
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
            {item?.chapters?.length} Chapter
          </Text>
        </View>
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
          <Ionicons name="timer-outline" size={24} color="black" />
          <Text style={{ color: "black", fontFamily: "outfit-medium" }}>
            {item?.time}
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: Colors.LIGHT_PRIMARY,
            fontFamily: "outfit-medium",
            marginTop: 6,
            paddingLeft: 4,
          }}
        >
          {item?.price == 0 ? "Free" : item?.price}
        </Text>
      </View>
    </View>
  );
}
