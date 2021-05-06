import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { COLORS } from "../../constants/colors";

const Inputs = (props) => {
  const {
    label,
    placeholder,
    rightIcon,
    keyboardType,
    errorMessage,
    secureTextEntry,
  } = props;
  return (
    <Input
      errorMessage={errorMessage}
      keyboardType={keyboardType}
      label={placeholder}
      secureTextEntry={secureTextEntry}
      leftIcon={
        <Icon
          name={label}
          {...props}
          style={{ ...styles.input, ...props.style }}
          size={24}
          color={COLORS.blue}
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
