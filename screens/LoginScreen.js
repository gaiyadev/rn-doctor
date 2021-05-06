import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "../components/forms/Button";
import Inputs from "../components/forms/Input";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import { ICONS } from "../constants/icons";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Rehat App</Text>
          </View>
          {/* <View style={styles.imgContainer}>
            <Image style={styles.img} source={IMAGES.onboarding_1} />
          </View> */}
          <View style={styles.inputContainer}>
            <Inputs
              errorMessage="err"
              placeholder="Email"
              label="envelope"
              keyboardType="email-address"
            />
            <Inputs
              placeholder="Password"
              label="lock"
              errorMessage="err"
              secureTextEntry={!showPassword}
              rightIcon={
                <Icon
                  name={showPassword ? "eye" : "eye-slash"}
                  size={24}
                  color={COLORS.blue}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />
            <View style={styles.forgotPasswordContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  console.log("forgot Password");
                }}
              >
                <Text style={styles.forgotPassword}>ForgotPassword?</Text>
              </TouchableWithoutFeedback>
            </View>

            <Button
              titleStyle={COLORS.white}
              buttonStyle={{
                backgroundColor: COLORS.blue,
                padding: 12,
                borderRadius: 13,
                width: 300,
              }}
              containerStyle={{ alignItems: "center" }}
              title="Login"
              onPress={() => {
                console.log("login");
              }}
              color={COLORS.black}
              style={styles.btn}
            />
          </View>
          <View style={styles.or}>
            <Text style={styles.orText}>Or, login with</Text>
          </View>
          {/* SOCIAL LOGIN */}
          <View style={styles.social}>
            <TouchableWithoutFeedback
              onPress={() => {
                console.log("fb");
              }}
            >
              <Image style={styles.socialLogo} source={ICONS.google} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                console.log("gogle");
              }}
            >
              <Image style={styles.socialLogo} source={ICONS.twitter} />
            </TouchableWithoutFeedback>
            <Icon name="facebook" size={25} color={COLORS.fb} />

            {/* <TouchableWithoutFeedback
              onPress={() => {
                console.log("gogle");
              }}
            >
              <Image style={styles.socialLogo} source={ICONS.twitter} />
            </TouchableWithoutFeedback> */}
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.account}>
              Don't have an account? &nbsp;
              <TouchableWithoutFeedback
                onPress={() => {
                  console.log("signup");
                }}
              >
                <Text style={styles.signup}>Sign Up</Text>
              </TouchableWithoutFeedback>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  socialLogo: {
    width: 25,
    height: 25,
  },
  signup: {
    ...FONTS.tiny,
    color: COLORS.blue,
  },
  account: {
    ...FONTS.tiny,
    color: COLORS.gray,
  },
  or: {
    flex: 1,
    alignItems: "center",
    ...FONTS.tiny,
  },
  orText: {
    color: COLORS.gray,
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 34,
  },
  forgotPassword: {
    paddingBottom: 6,
    paddingTop: 1,
    color: COLORS.blue,
    ...FONTS.tiny,
  },
  forgotPasswordContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  inputContainer: {
    padding: 12,
  },
  btn: {
    borderRadius: 50,
    padding: 12,
    // color: COLORS.accentColor,
  },
  container: {
    flex: 1,
    marginTop: 30,
    alignContent: "center",
    backgroundColor: COLORS.bgColor,
  },
  imgContainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  img: {
    flex: 1,
    margin: 20,
    width: 400,
    height: 400,
    alignContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 73,
    justifyContent: "center",
  },
  title: {
    marginTop: -12,
    fontSize: 40,
    ...FONTS.h1,
    color: COLORS.blue,
  },
});

export default LoginScreen;
