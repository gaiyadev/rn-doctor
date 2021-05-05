import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Content from "../../components/onboard/Content";
import Dots from "../../components/onboard/Dots";
import { SIZES } from "../../constants/sizes";
const OnboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Content />;
      </View>
      <View style={styles.dotsRootContainer}>
        <Dots />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dotsRootContainer: {
    position: "absolute",
    bottom: SIZES.height > 700 ? "20%" : "16%",
  },
});
export default OnboardScreen;
