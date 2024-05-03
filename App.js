import { View, Text } from "react-native";
import LoginScreen from "./App/Screen/LoginScreen";
import { useFonts } from "expo-font";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import HomeScreen from "./App/Screen/HomeScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "outfit-medium": require("./assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "outfit-": require("./assets/fonts/Outfit-Regular.ttf"),
  });

  return (
    <ClerkProvider
      publishableKey={
        "pk_test_YnVyc3Rpbmctc2hhZC00OC5jbGVyay5hY2NvdW50cy5kZXYk"
      }
    >
      <View>
        <SignedIn>
          <Text>You are signed in</Text>
          <HomeScreen />
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}
