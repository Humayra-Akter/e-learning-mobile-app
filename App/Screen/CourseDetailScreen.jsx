import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Colors from "../Utils/Colors";

export default function CourseDetailScreen() {
  const navigation = useNavigation();
  const params = useRoute().params;
  useEffect(() => {
    console.log(params?.course);
  }, []);

  return (
    <View
      style={{
        padding: 12,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle" size={40} color={Colors.PRIMARY} />
      </TouchableOpacity>
    </View>
  );
}
