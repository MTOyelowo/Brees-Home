import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  backgroundColor: string;
  strokeColor: string;
}

const TabBarBackground: FC<Props> = ({ backgroundColor, strokeColor }) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        alignItems: "center",
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <View
        style={{
          width: 125,
          height: 4,
          backgroundColor: strokeColor,
          borderRadius: 4,
          position: "absolute",
          bottom: 7,
          alignItems: "baseline",
        }}
      />
    </View>
  );
};

export default TabBarBackground;

const styles = StyleSheet.create({
  container: {},
});
