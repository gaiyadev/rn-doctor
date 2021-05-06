import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardScreen from "../screens/onBoard/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import SignupScreen from "../screens/SignupScreen";
import { FONTS } from "../constants/fonts";

const OnboardStack = createStackNavigator();

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
              backgroundColor: "#0682FE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              ...FONTS.h2,
            },
            headerShown: false,
          })}
        />
      </OnboardStack.Navigator>
    </NavigationContainer>
  );
};

export default Onboard;
