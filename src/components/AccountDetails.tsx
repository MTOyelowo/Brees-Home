import { FC } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import colors from "../utils/colors";
import AccountItem from "./childComponents/AccountItem";
import ForwardButton from "./childComponents/ForwardButton";
import AvatarIcon from "../svg/AvatarIcon";

type IAccountTypes = {
  name: string;
  amount: string;
};

interface Props {
  balance: string;
  message: string;
  accounts: IAccountTypes[];
}

const AccountDetails: FC<Props> = ({ accounts, balance, message }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.detailsHeader}>
          <View
            style={{
              backgroundColor: colors.periwrinkleBD,
              width: 52,
              height: 52,
              borderRadius: 26,
            }}
          >
            <AvatarIcon />
          </View>
          <View style={styles.balanceDetails}>
            <View style={{ gap: 8 }}>
              <Text style={styles.balanceText}>Your available balance is</Text>
              <Text style={styles.balance}>{balance}</Text>
            </View>
            <Text style={styles.balanceMessage}>{message}</Text>
          </View>
        </View>
        <View style={styles.accounts}>
          {accounts.map((bank, index) => (
            <AccountItem key={index} bank={bank} />
          ))}
        </View>
      </View>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/card-bg.png")}
      />
      <View style={{ position: "absolute", top: 20, right: 20 }}>
        <ForwardButton
          onPress={() => Alert.alert("Open Accounts Page")}
          width={30}
          height={30}
        />
      </View>
    </View>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({
  container: {
    gap: 24,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondaryA,
    borderRadius: 24,
    opacity: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.24,
    shadowRadius: 32,
    elevation: 16,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
    opacity: 0.2,
  },
  detailsHeader: {
    width: 192,
    gap: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarImage: {
    width: 52,
    height: 52,
  },
  balanceDetails: {
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  balanceText: {
    color: "#FAFCFF",
    textAlign: "center",
    fontSize: 11,
    lineHeight: 12,
    fontFamily: "inter500",
  },
  balance: {
    color: colors.white,
    textAlign: "center",
    fontSize: 28,
    lineHeight: 32,
    fontFamily: "inter800",
  },
  balanceMessage: {
    color: colors.white,
    textAlign: "center",
    fontSize: 11,
    lineHeight: 18,
    fontFamily: "inter500",
  },
  accounts: {
    gap: 15,
  },
});
