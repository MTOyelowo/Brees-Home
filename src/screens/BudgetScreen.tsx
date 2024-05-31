import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

const BudgetScreen: FC<Props> = (props) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>BudgetScreen</Text>
      </SafeAreaView>
    </>
  );
};

export default BudgetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
