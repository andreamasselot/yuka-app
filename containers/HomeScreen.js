import { ActivityIndicator, View } from "react-native";

export default function HomeScreen() {
  return isLoading ? <ActivityIndicator /> : <View>COUCOU</View>;
}
