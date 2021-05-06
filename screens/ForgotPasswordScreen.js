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
import HeaderLogo from "../components/forms/HeaderLogo";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  // Email input
  const onChangeEmailHandler = (emailVal) => {
    setEmail(emailVal);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <HeaderLogo />

          <View style={styles.inputContainer}>
            <Inputs
              value={email}
              onChangeText={onChangeEmailHandler}
              textContentType="emailAddress"
              placeholder="Email"
              label="envelope"
              keyboardType="email-address"
            />

            <Button
              titleStyle={COLORS.white}
              buttonStyle={{
                backgroundColor: COLORS.blue,
                padding: 12,
                borderRadius: 13,
                width: 300,
              }}
              containerStyle={{ alignItems: "center" }}
              title="Reset Password"
              onPress={() => {}}
              color={COLORS.black}
              style={styles.btn}
            />
          </View>
          <View style={styles.or}>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.orText}>Login</Text>
            </TouchableWithoutFeedback>
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
                  navigation.navigate("Signup");
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
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 42,
  },
  orText: {
    color: COLORS.blue,
    fontSize: 14,
    padding: 9,
    ...FONTS.tiny,
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

export default ForgotPasswordScreen;
