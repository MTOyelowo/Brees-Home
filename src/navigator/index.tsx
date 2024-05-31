import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import TabNavigator from "./TabNavigator";

interface Props {}

const breesTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const Navigator: FC<Props> = (props) => {
  return (
    <NavigationContainer theme={breesTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {},
});
