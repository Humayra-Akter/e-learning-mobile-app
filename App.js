import { View, Text, StyleSheet } from "react-native";
import LoginScreen from "./App/Screen/LoginScreen";
import { useFonts } from "expo-font";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import Colors from "./App/Utils/Colors";

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
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation style={{ backgroundColor: "black" }} />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    marginTop: 20,
  },
});
