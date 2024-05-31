import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import SvgIcon from "../../svg/SvgIcons";
import colors from "../../utils/colors";

interface Props {
  width: number;
  height: number;
  small?: boolean;
  onPress?(): void;
}

const ForwardButton: FC<Props> = ({
  width,
  height,
  small = false,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { width: width, height: height }]}
    >
      <SvgIcon.ChevronRight style={small ? styles.smallIcon : styles.icon} />
    </Pressable>
  );
};

export default ForwardButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 19,
    backgroundColor: colors.darkBlue,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 3,
  },
  icon: {},
  smallIcon: {
    transform: [{ scale: 0.8 }],
  },
});
