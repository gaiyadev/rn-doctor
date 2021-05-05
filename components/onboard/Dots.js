import React from "react";
import { Animated, View, StyleSheet } from "react-native";
import { SIZES } from "../../constants/sizes";
import { onBoardings } from "../../data/onboard";

const RenderDots = () => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);

  return (
    <View style={styles.dotsContainer}>
      {onBoardings.map((item, index) => {
        const opacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        const dotSize = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [SIZES.base, 17, SIZES.base],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={`dot-${item.id}`}
            opacity={opacity}
            style={[styles.dot, { width: dotSize, height: dotSize }]}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  dotsRootContainer: {
    position: "absolute",
    bottom: SIZES.height > 700 ? "20%" : "16%",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.padding / 2,
    marginBottom: SIZES.padding * 3,
    height: SIZES.padding,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2,
  },
});
export default RenderDots;
