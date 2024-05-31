import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../utils/colors";

interface Props {
  progress: number;
}

const ProgressBar: FC<Props> = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={[styles.progress, { width: `${progress}%` }]} />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    height: 4,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "transparent",
    position: "relative",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.erin,
    opacity: 0.3,
  },
  progress: {
    height: "100%",
    backgroundColor: colors.erin,
    position: "absolute",
    top: 0,
    left: 0,
  },
});
