import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

import { SearchBar } from "react-native-elements";

const SearchBarComp = () => {
  const [search, setSearch] = useState("");

  return (
    <View
      style={{
        marginVertical: 10,
      }}
    >
      <SearchBar
        searchIcon={{
          color: COLORS.blue,
        }}
        clearIcon={{
          color: "red",
        }}
        inputContainerStyle={{
          backgroundColor: COLORS.white,
          borderRadius: 5,
        }}
        leftIconContainerStyle={{
          backgroundColor: "white",
          borderRadius: 5,
        }}
        inputStyle={{ backgroundColor: COLORS.gray, borderRadius: 5 }}
        containerStyle={{
          elevation: 5,
          borderRadius: 5,
          height: 47,
          backgroundColor: "transparent",
          justifyContent: "space-around",
          borderTopWidth: 0,
          borderBottomWidth: 0,
        }}
        style={styles.search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Type Here..."
        value={search}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
  },
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
export default SearchBarComp;
