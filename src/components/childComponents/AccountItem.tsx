import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../utils/colors";

type IAccountItemTypes = {
  name: string;
  amount: string;
};

interface Props {
  bank: IAccountItemTypes;
}

const AccountItem: FC<Props> = ({ bank }) => {
  const { name, amount } = bank;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{amount}</Text>
    </View>
  );
};

export default AccountItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "inter500",
    fontSize: 12,
    lineHeight: 14,
    color: colors.white,
  },
});
