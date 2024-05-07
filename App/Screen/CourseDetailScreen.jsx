import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Colors from "../Utils/Colors";
import DetailSection from "../Components/CourseDetailScreen/DetailSection";

export default function CourseDetailScreen() {
  const navigation = useNavigation();
  const params = useRoute().params;
  useEffect(() => {
    console.log(params?.course);
  }, []);

  return (
    params.course && (
      <View
        style={{
          padding: 12,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={34} color={Colors.PRIMARY} />
          <DetailSection course={params?.course} />
        </TouchableOpacity>
      </View>
    )
  );
}
