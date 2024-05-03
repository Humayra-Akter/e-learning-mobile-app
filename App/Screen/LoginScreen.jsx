import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import app from "../../assets/images/app.png";
import google from "../../assets/images/google.png";
import Colors from "../Utils/Colors";

export default function LoginScreen() {
  return (
    <View>
      <Image
        source={app}
        style={{
          width: 400,
          height: 350,
          objectFit: "contain",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 150,
        }}
      />
      <View
        style={{
          height: 400,
          width: "100%",
          marginTop: 20,
          backgroundColor: Colors.PRIMARY,
          padding: 24,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 32,
            fontFamily: "outfit-bold",
            color: Colors.WHITE,
          }}
        >
          Pocket Programmer
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            marginTop: 20,
            fontFamily: "outfit-",
            color: Colors.WHITE,
          }}
        >
          Your Ultimate Programming Learning Box
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.WHITE,
            borderRadius: 40,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            gap: 12,
            marginTop: 20,
          }}
        >
          <Image
            source={google}
            style={{
              width: 30,
              height: 30,
              objectFit: "contain",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontFamily: "outfit-bold",
              color: Colors.PRIMARY,
            }}
          >
            Sign In With GOOGLE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
