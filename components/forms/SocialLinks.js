import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { COLORS } from "../../constants/colors";
import { ICONS } from "../../constants/icons";

const SocialLinks = () => {
  return (
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
      <Icon name="facebook" size={27} color={COLORS.fb} />

      {/* <TouchableWithoutFeedback
              onPress={() => {
                console.log("gogle");
              }}
            >
              <Image style={styles.socialLogo} source={ICONS.twitter} />
            </TouchableWithoutFeedback> */}
    </View>
  );
};

const styles = StyleSheet.create({
  social: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 34,
  },
  socialLogo: {
    width: 25,
    height: 25,
  },
});

export default SocialLinks;
