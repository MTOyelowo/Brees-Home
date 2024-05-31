import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../utils/colors";

interface Props {}

const NotificationIndicator: FC<Props> = (props) => {
  return (
    <View
      style={{
        width: 10,
        height: 10,
        borderWidth: 2,
        borderColor: colors.sandy,
        borderRadius: 10,
        backgroundColor: colors.sandy,
      }}
    />
  );
};

export default NotificationIndicator;

const styles = StyleSheet.create({
  container: {},
});
