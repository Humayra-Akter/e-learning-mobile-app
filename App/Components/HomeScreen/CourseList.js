import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getCourseList } from "../../Services/index";
import SubHeading from "../SubHeading";
import Colors from "../../Utils/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import CourseItem from "./CourseItem";

export default function CourseList({ level }) {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList(level).then((res) => {
      setCourseList(res?.courses);
    });
  };

  return (
    <View>
      <SubHeading
        text={level + " Courses"}
        //color={level == "Basic" && Colors.WHITE}
      />
      <FlatList
        data={courseList}
        key={courseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CourseItem item={item} />}
      />
    </View>
  );
}
