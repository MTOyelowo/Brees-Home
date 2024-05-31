import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../utils/colors";

interface ITransaction {
  name: string;
  bank: string;
  time: string;
  amount: string;
}

interface Props {
  transaction: ITransaction;
}

const TransactionItem: FC<Props> = ({ transaction }) => {
  const { name, bank, time, amount } = transaction;

  const textColor = amount.startsWith("+") ? colors.erin : colors.lavender;

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <View style={styles.initialsContainer}>
          <Text style={styles.initials}>{name.charAt(0)}</Text>
        </View>
        <View style={styles.nameTime}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>
            {bank} {time}
          </Text>
        </View>
      </View>
      <Text style={[styles.amount, { color: `${textColor}` }]}>{amount}</Text>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameContainer: {
    flexDirection: "row",
    gap: 12,
  },
  initialsContainer: {
    width: 36,
    height: 36,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.alice,
  },
  initials: {
    fontSize: 14,
    fontFamily: "inter600",
    lineHeight: 17,
    color: colors.byzantine,
  },
  nameTime: {
    gap: 4,
    justifyContent: "center",
  },
  name: {
    fontSize: 14,
    fontFamily: "inter500",
    lineHeight: 17,
    textAlign: "left",
    color: colors.white,
  },
  time: {
    fontSize: 12,
    fontFamily: "inter400",
    lineHeight: 14.5,
    textAlign: "left",
    color: colors.periwinkleB,
  },
  amount: {
    fontSize: 14,
    fontFamily: "inter600",
    lineHeight: 17,
    textAlign: "right",
  },
});
