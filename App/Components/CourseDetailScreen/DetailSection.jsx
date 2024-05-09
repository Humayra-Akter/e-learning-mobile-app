import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import OptionItem from "./OptionItem";
import { TouchableOpacity } from "react-native-gesture-handler";

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
      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 22,
            marginTop: 10,
            color: Colors.PRIMARY,
          }}
        >
          {course?.name}
        </Text>
      </View>

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
      <View>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 22,
          }}
        >
          Description
        </Text>
        <Text
          style={{
            fontFamily: "outfit-",
            fontSize: 14,
            textAlign: "justify",
            lineHeight: 20,
          }}
        >
          {course?.des?.markdown}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          gap: 10,
        }}
      >
        <View>
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 14,
              backgroundColor: Colors.PRIMARY,
            }}
            onPress={{}}
          >
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: 16,
                textAlign: "center",
                color: Colors.WHITE,
              }}
            >
              Enroll for Free
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 14,
              backgroundColor: Colors.LIGHT_PRIMARY,
            }}
            onPress={{}}
          >
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: 16,
                textAlign: "center",
                color: Colors.WHITE,
              }}
            >
              Membership for $2.99/Month
            </Text>
          </TouchableOpacity>
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
    marginBottom: 10,
  },
});
