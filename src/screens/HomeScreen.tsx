import { FC } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import AccountDetails from "../components/AccountDetails";
import TransactionSort from "../components/TransactionSort";
import BudgetDetailsCard from "../components/BudgetDetailsCard";
import RecentTransactionsCard from "../components/RecentTransactionsCard";

const userData = {
  name: "John",
  statusMessage: "Your finances are looking good",
  availableBalance: "N20,983",
  balanceMessage:
    "By this time last month, you spent slightly higher (N22,719)",
  accounts: [
    { name: "Kuda Bank", amount: "N12,000.00" },
    { name: "GT Bank", amount: "N950.00" },
    { name: "PiggyVest", amount: "N1,050.00" },
  ],
  budget: {
    amountLeft: "N29,880",
    amountBudgeted: "N80,888",
    progressPercentage: 75,
    message: "Sapa go soon catch you bros, calm down!!",
    emoji: "😱",
  },
};

interface Props {}

const HomeScreen: FC<Props> = (props) => {
  const {
    name,
    statusMessage,
    availableBalance,
    accounts,
    balanceMessage,
    budget,
  } = userData;
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header name={name} message={statusMessage} />
          <View style={styles.mainCards}>
            <AccountDetails
              accounts={accounts}
              balance={availableBalance}
              message={balanceMessage}
            />
            <TransactionSort />
          </View>
          <View style={styles.budgetContainer}>
            <BudgetDetailsCard budget={budget} />
          </View>
          <View style={styles.transactionContainer}>
            <RecentTransactionsCard />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  mainCards: {
    gap: 16,
    paddingHorizontal: 20,
    marginTop: 16,
  },
  budgetContainer: {
    marginTop: 24,
  },
  transactionContainer: {
    marginTop: 24,
    paddingBottom: 50,
  },
});
