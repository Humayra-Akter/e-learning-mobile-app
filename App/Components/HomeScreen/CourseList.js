import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { getCourseList } from "../../Services/index";

export default function CourseList({ level }) {
  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList(level).then((res) => {
      console.log(res);
    });
  };

  return (
    <View>
      <Text>CourseList</Text>
    </View>
  );
}
