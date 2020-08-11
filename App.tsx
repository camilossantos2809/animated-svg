import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  StyleSheet,
  Animated,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import Logo from "./src/Logo";
import Light from "./src/Light";

export default function App() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const animation = () =>
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 2,
        duration: 6000,
        useNativeDriver: false,
      })
    );

  const onStart = () => {
    animation().start();
  };

  const onStop = () => {
    animation().stop();
  };

  const inputRange = [0, 0.5, 1, 1.5, 2];

  const rotateY = animatedValue.interpolate({
    inputRange,
    outputRange: ["0deg", "-90deg", "-180deg", "-270deg", "-360deg"],
  });

  const translateX = animatedValue.interpolate({
    inputRange,
    outputRange: [0, 0, -200, -100, 0],
  });

  const scale = animatedValue.interpolate({
    inputRange,
    outputRange: [1, 20, 1, 0, 1],
  });

  return (
    <View style={styles.container}>
      <Logo width={200} height={200} />
      <Animated.View
        style={[
          styles.containerLight,
          {
            transform: [
              { translateX },
              { rotateY },
              { perspective: 50 },
              { scale },
            ],
          },
        ]}
      >
        <Light width={170} height={200} />
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
    right: 0,
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
