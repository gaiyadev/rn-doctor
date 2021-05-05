import React, { useEffect, useState } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { onBoardings } from "../../data/onboard";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import { SIZES } from "../../constants/sizes";

const RenderContent = ({ navigation }) => {
  const [completed, setCompleted] = useState(false);
  const scrollX = new Animated.Value(0);

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });
    return () => scrollX.removeListener();
  }, []);

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEnabled
      decelerationRate={0}
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
    >
      {onBoardings.map((item) => (
        <View key={`img-${item.id}`} style={styles.imageAndTextContainer}>
          <View
            style={{
              flex: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={item.img}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: "10%",
              left: 40,
              right: 40,
            }}
          >
            <Text
              style={{
                ...FONTS.h1,
                color: COLORS.gray,
                textAlign: "center",
              }}
            >
              {item.title}
            </Text>

            <Text
              style={{
                ...FONTS.body3,
                textAlign: "center",
                marginTop: SIZES.base,
                color: COLORS.gray,
              }}
            >
              {item.description}
            </Text>
          </View>
          {/* Button */}
          <TouchableOpacity
            style={styles.letGo}
            onPress={() => {
              console.log("pressew");
              //   navigation.navigate("WelcomeScreen");
            }}
          >
            <Text style={{ ...FONTS.h1, color: COLORS.white }}>
              {completed ? "Let's Go" : "Skip"}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  imageAndTextContainer: {
    width: SIZES.width,
  },
  letGo: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 150,
    height: 60,
    paddingLeft: 20,
    justifyContent: "center",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: COLORS.blue,
  },
});

export default RenderContent;
