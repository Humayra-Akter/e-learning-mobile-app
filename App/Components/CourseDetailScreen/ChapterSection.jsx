import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../Utils/Colors";

export default function ChapterSection({ chapterList }) {
  return (
    chapterList && (
      <View>
        {chapterList.map((item, index) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "space-between",
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 12,
              padding: 10,
              borderColor: Colors.PRIMARY,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 22,
                }}
              >
                {index + 1}
              </Text>
              <Text
                style={{
                  fontFamily: "outfit-",
                  fontSize: 20,
                }}
              >
                {item?.title}
              </Text>
            </View>
            <Ionicons name="md-lock-closed" size={24} color={Colors.GRAY} />
          </View>
        ))}
      </View>
    )
  );
}
