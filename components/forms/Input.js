import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { COLORS } from "../../constants/colors";
import { color, floor } from "react-native-reanimated";
import { FONTS } from "../../constants/fonts";
const Inputs = (props) => {
  const [focused, setFocus] = useState(false);
  const {
    label,
    placeholder,
    rightIcon,
    keyboardType,
    errorMessage,
    secureTextEntry,
    textContentType,
    onChangeText,
  } = props;
  return (
    <Input
      labelStyle={{
        color: COLORS.blue,
        ...FONTS.tiny,
      }}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
      selectionColor={COLORS.blue}
      textContentType={textContentType}
      errorMessage={errorMessage}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      label={placeholder}
      secureTextEntry={secureTextEntry}
      leftIcon={
        <Icon
          name={label}
          {...props}
          style={{ ...styles.input, ...props.style }}
          size={19}
          color={focused ? COLORS.activeiconColor : COLORS.inAtiveIconColor}
        />
      }
      rightIcon={rightIcon}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 12,
  },
});

export default Inputs;
