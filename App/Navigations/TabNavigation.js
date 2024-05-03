import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screen/HomeScreen";
import ProfileScreen from "../Screen/ProfileScreen";
import LeaderBoard from "../Screen/LeaderBoard";
import MyCourse from "../Screen/MyCourse";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

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
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            <Ionicons name="home" size={size} color={color} />;
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
            <Ionicons name="book" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
