import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../Screen/ProfileScreen";
import LeaderBoard from "../Screen/LeaderBoard";
import MyCourse from "../Screen/MyCourse";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import HomeScreenNavigation from "./HomeScreenNavigation";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreenNavigation}
        options={{
          tabBarIcon: ({ color, size }) => {
            <Ionicons name="home" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            <MaterialIcons
              name="supervised-user-circle"
              size={24}
              color="black"
            />;
          },
        }}
      />
      <Tab.Screen
        name="leader-board"
        component={LeaderBoard}
        options={{
          tabBarIcon: ({ color, size }) => {
            <MaterialIcons name="leaderboard" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="my-course"
        component={MyCourse}
        options={{
          tabBarIcon: ({ color, size }) => {
            <Feather name="book-open" size={24} color="black" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
