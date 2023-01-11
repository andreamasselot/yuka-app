import { ActivityIndicator, View, Text } from "react-native";

export default function HomeScreen() {
  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View>
      <Text>THIS IS HOME SCREEN</Text>
    </View>
  );
}
