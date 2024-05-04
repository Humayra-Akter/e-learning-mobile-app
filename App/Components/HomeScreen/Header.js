import { View, Text, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import Coin from "../../../assets/images/coin.png";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    isLoaded && (
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: user?.imageUrl }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
              }}
            />
            <View>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontSize: 16,
                  fontFamily: "outfit-",
                }}
              >
                Welcome,
              </Text>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontFamily: "outfit-",
                  fontSize: 18,
                  textTransform: "capitalize",
                }}
              >
                {user?.fullName}
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={Coin}
              style={{
                width: 30,
                height: 30,
                borderRadius: 100,
              }}
            />
            <Text
              style={{
                color: Colors.WHITE,
                fontFamily: "outfit-",
                fontSize: 18,
                textTransform: "capitalize",
              }}
            >
              3120
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: Colors.WHITE,
            justifyContent: "space-between",
            marginTop: 26,
            borderRadius: 100,
          }}
        >
          <TextInput
            placeholder="Search Courses"
            style={{
              fontFamily: "outfit-meduum",
              fontSize: 16,
              paddingLeft: 16,
            }}
          />
          <Ionicons name="search-circle" size={50} color={Colors.PRIMARY} />
        </View>
      </View>
    )
  );
}
