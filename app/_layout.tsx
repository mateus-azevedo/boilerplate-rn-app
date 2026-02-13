import { PropsWithChildren } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

export const CustomText = ({ children }: PropsWithChildren) => (
  <Text>{children}</Text>
);

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <CustomText>Welcome!</CustomText>
      <Button
        title="Go to Planner"
        onPress={() => {
          console.log("Navigating to /planner");
          router.navigate("/planner");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
