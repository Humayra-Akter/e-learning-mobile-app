import { View, Text } from "react-native";
import React from "react";
import Header from "../Components/HomeScreen/Header";
import Colors from "../Utils/Colors";
import CourseList from "../Components/HomeScreen/CourseList";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{
      backgroundColor:"#000"
    }}>
      <View
        style={{
          backgroundColor: Colors.PRIMARY,
          height: 280,
          padding: 20,
        }}
      >
        <Header />
      </View>
      <View style={{ padding: 8 }}>
        <View style={{ marginTop: -90 }}>
          <CourseList level={"Basic"} />
        </View>
        <View style={{ marginTop: 12 }}>
          <CourseList level={"Moderate"} />
        </View>
        <View style={{ marginTop: 12 }}>
          <CourseList level={"Advance"} />
        </View>
      </View>
    </SafeAreaView>
  );
}
