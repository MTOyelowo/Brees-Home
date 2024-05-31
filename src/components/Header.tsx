import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";
import SvgIcon from "../svg/SvgIcons";

interface Props {
  name: string;
  message: string;
}

const Header: FC<Props> = ({ name, message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.nameContainer}>
          <Text style={[styles.nameText, { fontFamily: "inter500" }]}>
            Hello
          </Text>
          <Text style={[styles.nameText, { fontFamily: "inter700" }]}>
            {name}
          </Text>
        </View>
        <Text style={styles.statusMessage}>{message}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <View style={styles.svgContainer}>
          <SvgIcon.Bell />
        </View>
        <View style={styles.svgContainer}>
          <SvgIcon.Search />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 64,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {},
  nameContainer: {
    flexDirection: "row",
    gap: 4,
  },
  nameText: {
    fontSize: 16,
    color: colors.white,
    lineHeight: 19.36,
    // paddingHorizontal: 4
  },
  statusMessage: {
    fontFamily: "inter400",
    fontSize: 12,
    lineHeight: 18,
    color: colors.white,
    opacity: 0.8,
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 4,
  },
  svgContainer: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.secondary,
    padding: 7,
    alignItems: "center",
    justifyContent: "center",
  },
});
