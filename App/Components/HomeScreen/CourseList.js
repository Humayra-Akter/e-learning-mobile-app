import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getCourseList } from "../../Services/index";
import SubHeading from "../SubHeading";
import Colors from "../../Utils/Colors";

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
      <SubHeading text={"Basic Courses"} />
      <FlatList
        data={courseList}
        key={courseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              backgroundColor: Colors.PRIMARY,
              marginRight: 14,
              borderRadius: 16,
            }}
          >
            <Image
              source={{ uri: item?.banner?.url }}
              style={{ width: 210, borderRadius: 10, height: 120 }}
            />
          </View>
        )}
      />
    </View>
  );
}
