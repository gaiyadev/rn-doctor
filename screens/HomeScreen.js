import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/onboard";
import SearchBarComp from "../components/UI/SearchBar";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text>Hello, gaiyadev</Text>
        <Text style={styles.findADoctor}>Find a doctor</Text>
        {/*  */}
        <SearchBarComp />
        <View>
          <Text>ddd</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  findADoctor: {
    ...FONTS.h2,
    paddingTop: 5,
  },
  welcome: {
    flex: 1,
    marginTop: 5,
    ...FONTS.tiny,
    marginLeft: 12,
    color: COLORS.gray,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
export default HomeScreen;
