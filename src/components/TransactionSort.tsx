import { FC } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";
import SvgIcon from "../svg/SvgIcons";
import NotificationIndicator from "./childComponents/NotificationIndicator";
import ForwardButton from "./childComponents/ForwardButton";

interface Props {}

const TransactionSort: FC<Props> = (props) => {
  return (
    <View style={styles.sortContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.sortIcon}>
          <SvgIcon.Sort />
          <View style={styles.notificationIndicator}>
            <NotificationIndicator />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.header}>Sort your transactions</Text>
          <Text style={styles.subText}>
            Get points for sorting your transactions
          </Text>
        </View>
      </View>
      <ForwardButton
        onPress={() => Alert.alert("Open Transactions Sort")}
        width={30}
        height={30}
      />
    </View>
  );
};

export default TransactionSort;

const styles = StyleSheet.create({
  sortContainer: {
    width: "100%",
    gap: 56,
    padding: 16,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.secondaryB,
  },
  infoContainer: {
    gap: 24,
    flex: 1,
    flexShrink: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  sortIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondaryC,
    position: "relative",
  },
  notificationIndicator: {
    position: "absolute",
    top: -2,
    right: -2,
  },
  textContainer: {
    flexShrink: 1,
  },
  header: {
    fontSize: 14,
    fontFamily: "inter600",
    lineHeight: 19.6,
    textAlign: "left",
    color: colors.white,
  },
  subText: {
    fontSize: 12,
    fontFamily: "inter400",
    lineHeight: 16.8,
    textAlign: "left",
    color: colors.white,
    opacity: 0.75,
    flex: 1,
    paddingHorizontal: 1,
    flexShrink: 1,
  },
});
