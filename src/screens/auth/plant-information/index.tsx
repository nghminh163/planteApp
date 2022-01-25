import BodyRegular from "@components/Typography/BodyRegular";
import Header1 from "@components/Typography/Header1";
import Header2 from "@components/Typography/Header2";
import SmallText from "@components/Typography/SmallText";
import Title from "@components/Typography/Title";
import { images } from "@utils/images";
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
      <View>
        <Image
          style={styles.backButton}
          source={require('@assets/png/back.png')}
        />
      </View>
      <View style={styles.plantLabel}>
        <Header2>Rosemary</Header2>
        <SmallText>Perenials/Herbs</SmallText>
      </View>

      <View style={styles.meta}>
        <View style={styles.metaData}>
          <Image
            source={require('@assets/png/meter.png')}
            style={{ marginRight: 30 }}
          />
          <SmallText>1 - 2 m</SmallText>
        </View>

        <View style={styles.metaData}>
          <Image
            source={require('@assets/png/shovel.png')}
            style={{ marginRight: 20 }}
          />
          <SmallText>57 days</SmallText>
        </View>

        <View style={styles.metaData}>
          <Image
            source={require('@assets/png/droplet.png')}
            style={{ marginRight: 25 }}
          />
          <SmallText>85 %</SmallText>
        </View>

        <View style={styles.metaData}>
          <Image
            source={require('@assets/png/temp.png')}
            style={{ marginRight: 26 }}
          />
          <SmallText>20 - 30 C</SmallText>
        </View>
      </View>
      <View style={styles.information}>
        {/* <Header2>About</Header2> */}
        <Title>About</Title>
        <SmallText>Rosemary is a small evergreen plant of the mint family, the leaves of which are used to flavour foods. Native to the Mediterranean region, rosemary has naturalized throughout much of Europe and is widely grown in gardens in warm climates. The leaves have a pungent, slightly bitter taste and, dried or fresh, are generally used to season foods.</SmallText>
      </View>
      <Image
        style={styles.bgImage}
        source={require('@assets/png/rosemary2.png')}
      />
    </LinearGradient >
  );
}

// function MetaData(metaIcon: string, metaData: string) {
//   return (
//     <View
//       style={styles.metaData}
//     >
//       {/* <Image
//         source={metaIcon}
//         style={{ marginRight: 20 }}
//       /> */}
//       <SmallText>{metaData}</SmallText>
//     </View>
//   );
// }

export default PlantInformation;