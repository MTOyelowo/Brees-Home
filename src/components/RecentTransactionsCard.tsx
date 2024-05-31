import { FC } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";
import ProgressBar from "./childComponents/ProgressBar";
import TransactionItem from "./childComponents/TransactionItem";
import ForwardButton from "./childComponents/ForwardButton";

const transactions = [
  {
    name: "John Ogaga",
    bank: "Zenith Bank",
    time: "12:03 AM",
    amount: "+N20,983",
  },
  {
    name: "Habib Yoghurt",
    bank: "GT-Bank",
    time: "12:03 AM",
    amount: "-N20,983",
  },

  {
    name: "Habib Yoghurt",
    bank: "GT-Bank",
    time: "12:03 AM",
    amount: "-N20,983",
  },
];

interface Props {}

const RecentTransactionsCard: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transactions</Text>
      <View style={styles.transactionsContainer}>
        <Text style={styles.subHeader}>Recent Transactions</Text>
        <View style={styles.transactions}>
          {transactions.map((transaction, index) => (
            <TransactionItem key={index} transaction={transaction} />
          ))}
        </View>
        <View style={styles.forwardButton}>
          <ForwardButton
            onPress={() => Alert.alert("Open Recent Transactions")}
            width={20}
            height={20}
            small
          />
        </View>
      </View>
    </View>
  );
};

export default RecentTransactionsCard;

const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 8,
    color: colors.periwinkle,
    fontSize: 13,
    fontFamily: "inter600",
    lineHeight: 20,
  },
  subHeader: {
    fontSize: 12,
    fontFamily: "inter600",
    lineHeight: 15,
    color: colors.white,
  },
  transactionsContainer: {
    gap: 13,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 16,
    backgroundColor: colors.palatinate,
  },
  transactions: {
    gap: 24,
  },
  forwardButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
});
