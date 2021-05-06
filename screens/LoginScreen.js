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
import SocialLinks from "../components/forms/SocialLinks";
import HeaderLogo from "../components/forms/HeaderLogo";

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email input
  const onChangeEmailHandler = (emailVal) => {
    setEmail(emailVal);
  };
  // Password input
  const onChangePasswordHandler = (passwordVal) => {
    setPassword(passwordVal);
  };

  // Submitting data
  const onSubmitHandler = () => {
    const user = { email, password };
    console.log(user);
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
            <View style={styles.forgotPasswordContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("ForgotPassword");
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
              onPress={onSubmitHandler}
              color={COLORS.black}
              style={styles.btn}
            />
          </View>
          <View style={styles.or}>
            <Text style={styles.orText}>Or login with</Text>
          </View>
          {/* SOCIAL LOGIN */}
          <SocialLinks />
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

export default LoginScreen;
