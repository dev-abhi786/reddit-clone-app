import { Stack, Redirect, useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { ActivityIndicator, Text } from "react-native";

export default function AuthLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <ActivityIndicator size="large" style={{ marginVertical: "auto" }} />
    );
  }

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <Stack>
      <Stack.Screen name="signUp" options={{ title: "Sign Up" }} />
      <Stack.Screen name="signIn" options={{ title: "Sign In" }} />
    </Stack>
  );
}
