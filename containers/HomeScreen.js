import { ActivityIndicator, View, Text } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View>
      <Text>THIS IS HOME SCREEN</Text>
    </View>
  );
}
