import { FC } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";
import ProgressBar from "./childComponents/ProgressBar";
import ForwardButton from "./childComponents/ForwardButton";

interface IBudget {
  amountLeft: string;
  amountBudgeted: string;
  progressPercentage: number;
  message: string;
  emoji: string;
}

interface Props {
  budget: IBudget;
}

const BudgetDetailsCard: FC<Props> = ({ budget }) => {
  const { amountBudgeted, amountLeft, message, progressPercentage, emoji } =
    budget;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Budgets</Text>
      <View style={styles.budgetContainer}>
        <View style={{gap: 8}}>
          <Text style={styles.lineOdd}>You have</Text>
          <Text style={styles.lineTwo}>{amountLeft}</Text>
          <Text style={styles.lineOdd}>
            Left out of {amountBudgeted} budgeted
          </Text>
        </View>
        <View style={styles.progressContainer}>
          <ProgressBar progress={progressPercentage} />
          <View style={styles.progressMessage}>
            <Text style={styles.emoji}>{emoji}</Text>
            <Text style={styles.message}>{message}</Text>
          </View>
        </View>
        <View style={styles.forwardButton}>
          <ForwardButton  onPress={() => Alert.alert("Open Budgets Page")} width={20} height={20} small />
        </View>
      </View>
    </View>
  );
};

export default BudgetDetailsCard;

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
  budgetContainer: {
    gap: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 16,
    backgroundColor: colors.palatinate,
  },
  lineOdd: {
    fontSize: 12,
    fontFamily: "inter500",
    lineHeight: 24,
    textAlign: "left",
    color: colors.white,
    opacity: 0.9,
  },
  lineTwo: {
    fontSize: 18,
    fontFamily: "inter800",
    lineHeight: 18,
    textAlign: "left",
    color: colors.white,
  },
  progressContainer: {
    gap: 24,
  },
  progressMessage: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    width: "100%",
  },
  emoji: {
    fontSize: 18,
    fontFamily: "inter500",
    lineHeight: 18,
    textAlign: "left",
    paddingVertical: 2,
  },
  message: {
    fontSize: 11,
    fontFamily: "inter500",
    lineHeight: 18,
    textAlign: "left",
    color: colors.white,
  },
  forwardButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
});
