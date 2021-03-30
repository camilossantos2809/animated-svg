import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  StyleSheet,
  Animated,
  View,
  TouchableOpacity,
  Text,
  Easing,
} from "react-native";
import Logo from "./src/Logo";
import Light from "./src/Light";

const WIDTH_LIGHT = 200;

export default function App() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const animation = () =>
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 2,
        duration: 5000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    );

  const onStart = () => {
    animation().start();
  };

  const onStop = () => {
    animation().stop();
  };

  const inputRange = [0, 1, 2];

  const rotateY = animatedValue.interpolate({
    inputRange: [0, 2],
    outputRange: ["0deg", "360deg"],
    extrapolate: "clamp",
  });

  const opacity = animatedValue.interpolate({
    inputRange,
    outputRange: [0.85, 0.5, 0.85],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Logo width={200} height={200} />
      <Animated.View
        style={[
          styles.containerLight,
          {
            opacity,
            transform: [
              { translateX: -(WIDTH_LIGHT + 50) / 2 },
              { rotateY },
              { translateX: (WIDTH_LIGHT + 50) / 2 },
            ],
          },
        ]}
      >
        <Light width={WIDTH_LIGHT} height={200} />
      </Animated.View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={onStart}>
          <Text>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onStop}>
          <Text>Stop</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 200,
  },
  containerLight: {
    position: "absolute",
    right: -30,
    top: -70,
  },
  containerButton: {
    flexDirection: "row",
  },
  button: {
    padding: 10,
    paddingHorizontal: 30,
    marginVertical: 30,
    marginHorizontal: 10,
    backgroundColor: "#4680ff",
    borderRadius: 5,
  },
});
