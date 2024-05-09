import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ChapterSection({ chapterList }) {
  return (
    chapterList && (
      <View>
        {chapterList.map((item, index) => (
          <View>
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
              <Ionicons name="play-circle" size={24} color="black" />
            </View>
          </View>
        ))}
      </View>
    )
  );
}
