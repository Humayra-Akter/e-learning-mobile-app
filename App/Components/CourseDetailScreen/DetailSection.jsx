import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import OptionItem from "./OptionItem";

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

      <View>
        <View style={styles.rowStyle}>
          <OptionItem
            icon={"book-outline"}
            value={course?.chapters?.length + " Chapters"}
          />
          <OptionItem icon={"md-time-outline"} value={course?.time + "Hours"} />
        </View>
        <View style={styles.rowStyle}>
          <OptionItem icon={"person-circle-outline"} value={course?.author} />
          <OptionItem icon={"cellular-outline"} value={course.level} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
  },
});
