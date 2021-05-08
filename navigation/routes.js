import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardScreen from "../screens/onBoard/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import OtpScreen from "../screens/OtpScreen";
import SignupScreen from "../screens/SignupScreen";
import { FONTS } from "../constants/fonts";
import BottomTabs from "../navigation/tabs/BottomTabs";
const OnboardStack = createStackNavigator();
import { COLORS } from "../constants/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, StyleSheet } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

const Onboard = () => {
  return (
    <NavigationContainer initialRouteName="OnboardScreen">
      <OnboardStack.Navigator>
        <OnboardStack.Screen
          name="OnboardScreen"
          component={OnboardScreen}
          options={{ headerShown: false }}
        />
        <OnboardStack.Screen
          name="Login"
          component={LoginScreen}
          options={({ route, navigation }) => ({
            title: "iTrans",
            headerStyle: {
              backgroundColor: "#0682FE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              ...FONTS.h2,
            },
            headerShown: false,
          })}
        />
        <OnboardStack.Screen
          name="Otp"
          component={OtpScreen}
          options={({ route, navigation }) => ({
            title: "iTrans",
            headerStyle: {
              backgroundColor: "#0682FE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              ...FONTS.h2,
            },
            headerShown: false,
          })}
        />
        <OnboardStack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={({ route, navigation }) => ({
            title: "iTrans",
            headerStyle: {
              backgroundColor: "#0682FE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              ...FONTS.h2,
            },
            headerShown: false,
          })}
        />
        <OnboardStack.Screen
          name="Signup"
          component={SignupScreen}
          options={({ route, navigation }) => ({
            title: "iTrans",
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              ...FONTS.h2,
            },
            headerShown: false,
          })}
        />
        <OnboardStack.Screen
          name="Home"
          component={BottomTabs}
          options={({ route, navigation }) => ({
            title: "iDoc",
            headerStyle: {
              elevation: 0,
              backgroundColor: COLORS.white,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              ...FONTS.h2,
            },
            headerLeft: () => (
              <Icon
                onPress={() => {
                  console.log("draewr");
                }}
                color={COLORS.blue}
                style={{ paddingHorizontal: 10 }}
                size={30}
                name="menu-outline"
              />
            ),
            headerRight: () => (
              <View>
                <Menu>
                  <MenuTrigger>
                    <Icon
                      style={{
                        paddingHorizontal: 10,
                      }}
                      name={
                        Platform.OS === "android"
                          ? "ellipsis-vertical-outline"
                          : "ellipsis-vertical-outline"
                      }
                      size={25}
                      color={
                        Platform.OS === "android" ? COLORS.blue : COLORS.blue
                      }
                    />
                  </MenuTrigger>
                  <MenuOptions>
                    <MenuOption
                      style={styles.container}
                      onSelect={() => console.log("ac")}
                    >
                      <Text style={styles.title}>
                        <Icon style={styles.icons} name="person-outline" />
                        Account
                      </Text>
                    </MenuOption>
                    <MenuOption
                      style={styles.container}
                      onSelect={() => console.log("ac")}
                    >
                      <Text style={styles.title}>
                        <Icon
                          style={styles.icons}
                          name="information-circle-outline"
                        />
                        Help
                      </Text>
                    </MenuOption>
                    <MenuOption
                      style={styles.container}
                      onSelect={() => alert(`Delete`)}
                    >
                      <Text style={styles.title}>
                        <Icon
                          style={styles.icons}
                          name="trash-outline"
                          style={styles.icons}
                        />
                        Delete Account
                      </Text>
                    </MenuOption>
                  </MenuOptions>
                </Menu>
              </View>
            ),
          })}
        />
      </OnboardStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 9,
    elevation: 10,
    backgroundColor: COLORS.white,
  },
  icons: {
    color: COLORS.blue,
  },
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
  },
});
export default Onboard;
