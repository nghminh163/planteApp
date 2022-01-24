import BodyRegular from "@components/Typography/BodyRegular";
import Header2 from "@components/Typography/Header2";
import SmallText from "@components/Typography/SmallText";
import React from "react";
import { View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
// import { Image } from "react-native-svg";
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
      >
        <Header2>About</Header2>
        <SmallText>Rosemary is a small evergreen plant of the mint family, the leaves of which are used to flavour foods. Native to the Mediterranean region, rosemary has naturalized throughout much of Europe and is widely grown in gardens in warm climates. The leaves have a pungent, slightly bitter taste and, dried or fresh, are generally used to season foods.</SmallText>
      </View>
      <View
        style={styles.imageContainer}
      >
        <Image
          style={styles.bgImage}
          source={require('@assets/png/rosemary2.png')}
        />
      </View>
    </LinearGradient >
  );
}

export default PlantInformation;