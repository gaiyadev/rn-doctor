import * as React from "react";
import { Image } from "react-native";
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
            // headerRight: () => (
            //   <Icon
            //     onPress={() => {
            //       console.log("draewr");
            //     }}
            //     color={COLORS.blue}
            //     style={{ paddingHorizontal: 10 }}
            //     size={30}
            //     name="person-outline"
            //   />
            // ),
          })}
        />
      </OnboardStack.Navigator>
    </NavigationContainer>
  );
};

export default Onboard;
