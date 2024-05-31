import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import SvgIcon from "../svg/SvgIcons";
import BudgetScreen from "../screens/BudgetScreen";
import InsightScreen from "../screens/InsightScreen";
import ProfileScreen from "../screens/ProfileScreen";
import colors from "../utils/colors";
import TabBarBackground from "./TabBarBackground";

interface Props {}

const Tab = createBottomTabNavigator();

const TabNavigator: FC<Props> = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 82,
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeNavigator"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <SvgIcon.Home focused={focused} color={color} />
          ),
          tabBarShowLabel: false,
          tabBarInactiveTintColor: colors.periwinkle,
          tabBarActiveTintColor: colors.white,
          tabBarBackground: () => (
            <TabBarBackground
              backgroundColor={colors.primary}
              strokeColor={colors.periwinkleC}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BudgetNavigator"
        component={BudgetScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <SvgIcon.Pie focused={focused} color={color} />
          ),
          tabBarShowLabel: false,
          tabBarInactiveTintColor: colors.zaffre,
          tabBarActiveTintColor: colors.chrysler,
          tabBarBackground: () => (
            <TabBarBackground
              backgroundColor={colors.white}
              strokeColor={colors.night}
            />
          ),
        }}
      />
      <Tab.Screen
        name="InsightsNavigator"
        component={InsightScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <SvgIcon.Chart focused={focused} color={color} />
          ),
          tabBarShowLabel: false,
          tabBarInactiveTintColor: colors.zaffre,
          tabBarActiveTintColor: colors.chrysler,
          tabBarBackground: () => (
            <TabBarBackground
              backgroundColor={colors.white}
              strokeColor={colors.night}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <SvgIcon.Profile focused={focused} color={color} />
          ),
          tabBarShowLabel: false,
          tabBarInactiveTintColor: colors.zaffre,
          tabBarActiveTintColor: colors.chrysler,
          tabBarBackground: () => (
            <TabBarBackground
              backgroundColor={colors.white}
              strokeColor={colors.night}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {},
});
