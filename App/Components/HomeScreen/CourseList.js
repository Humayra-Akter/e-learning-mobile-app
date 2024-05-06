import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getCourseList } from "../../Services/index";
import SubHeading from "../SubHeading";
import Colors from "../../Utils/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

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
      <SubHeading text={level + " Courses"} color={level=='Basic' && Colors.WHITE} />
      <FlatList
        data={courseList}
        key={courseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              backgroundColor: Colors.LIGHT_PRIMARY,
              marginRight: 14,
              borderRadius: 16,
            }}
          >
            <Image
              source={{ uri: item?.banner?.url }}
              style={{ width: 210, borderRadius: 10, height: 120 }}
            />
            <View style={{ padding: 4 }}>
              <Text
                style={{
                  fontFamily: "outfit-bold",
                  fontSize: 16,
                  color: Colors.WHITE,
                }}
              >
                {item?.name}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 6,
                  paddingLeft: 4,
                }}
              >
                <Ionicons name="book-outline" size={24} color="white" />
                <Text style={{ color: "white", fontFamily: "outfit-medium" }}>
                  {item?.chapters?.length} Chapter
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 6,
                  paddingLeft: 4,
                }}
              >
                <Ionicons name="timer-outline" size={24} color="white" />
                <Text style={{ color: "white", fontFamily: "outfit-medium" }}>
                  {item?.time}
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: Colors.LIGHT_PRIMARY,
                  fontFamily: "outfit-medium",
                  marginTop: 6,
                  paddingLeft: 4,
                }}
              >
                {item?.price == 0 ? "Free" : item?.price}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
