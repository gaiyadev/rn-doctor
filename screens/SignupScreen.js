import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
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

const SignupScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  // Email input
  const onChangeEmailHandler = (emailVal) => {
    setEmail(emailVal);
  };
  // Password input
  const onChangePasswordHandler = (passwordVal) => {
    setPassword(passwordVal);
  };
  const onChangeUsernameHandler = (usernameVal) => {
    setUsername(usernameVal);
  };
  // Submitting data
  const onSubmitHandler = () => {
    const user = { email, password, username };
    console.log(user);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          {/* logo */}
          <HeaderLogo />

          <View style={styles.inputContainer}>
            <Inputs
              placeholder="Username"
              value={useState}
              onChangeText={onChangeUsernameHandler}
              label="user"
            />

            <Inputs
              value={email}
              onChangeText={onChangeEmailHandler}
              textContentType="emailAddress"
              placeholder="Email"
              label="envelope"
              keyboardType="email-address"
            />

            <Inputs
              onChangeText={onChangePasswordHandler}
              textContentType="password"
              placeholder="Password"
              label="lock"
              value={password}
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

            <Inputs
              onChangeText={onChangePasswordHandler}
              textContentType="password"
              placeholder="Comfirm Password"
              label="lock"
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

            <Button
              titleStyle={COLORS.white}
              buttonStyle={{
                backgroundColor: COLORS.blue,
                padding: 12,
                borderRadius: 13,
                width: 300,
              }}
              containerStyle={{ alignItems: "center" }}
              title="Sign up"
              onPress={onSubmitHandler}
              color={COLORS.black}
              style={styles.btn}
            />
          </View>

          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.account}>
              Already have an account? &nbsp;
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text style={styles.signup}>Login</Text>
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
});

export default SignupScreen;
