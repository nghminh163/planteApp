import React from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";

function PlantInformation() {
  return (
    <LinearGradient
      colors={['#E5E0DA', '#D3CCC4']}
      locations={[0.341, 0.792]}
      useAngle={true}
      angle={113.99}
      angleCenter={{ x: 0.5, y: 0.5 }}
      style={styles.container}
    >
      <View
        style={styles.information}
      />
    </LinearGradient >
  );
}

export default PlantInformation;