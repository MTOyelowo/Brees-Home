import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

const InsightScreen: FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>InsightScreen</Text>
    </SafeAreaView>
  );
};

export default InsightScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
