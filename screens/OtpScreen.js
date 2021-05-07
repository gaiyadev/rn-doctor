import React, { useState } from "react";
import { View, KeyboardAvoidingView, Keyboard } from "react-native";
import OTPTextInput from "react-native-otp-textinput";
import Button from "../components/forms/Button";
import { COLORS } from "../constants/colors";

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState();

  const onSubmitHandler = () => {
    if (!otp || otp.length !== 4) {
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });

    console.log(otp);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 45,
      }}
    >
      <KeyboardAvoidingView onPress={Keyboard.dismiss}>
        <OTPTextInput
          tintColor={COLORS.blue}
          handleTextChange={(text) => setOtp(text)}
        />
        <Button
          titleStyle={COLORS.white}
          buttonStyle={{
            backgroundColor: COLORS.blue,
            padding: 12,
            margin: 17,
            borderRadius: 13,
            width: 300,
          }}
          containerStyle={{ alignItems: "center" }}
          title="Submit"
          onPress={onSubmitHandler}
          color={COLORS.black}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default OtpScreen;
