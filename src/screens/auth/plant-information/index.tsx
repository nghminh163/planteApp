import BodyBold from "@components/Typography/BodyBold";
import BodyRegular from "@components/Typography/BodyRegular";
import Header1 from "@components/Typography/Header1";
import Header2 from "@components/Typography/Header2";
import SmallText from "@components/Typography/SmallText";
import Title from "@components/Typography/Title";
import { SECONDARY } from "@utils/colors";
import { images } from "@utils/images";
import React from "react";
import { View, Image, FlatList, ScrollView, ImageProps } from "react-native";
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
        <MetaData
          metaIcon={require('@assets/png/meter.png')}
          metaData="1 - 2 m"
        />
        <MetaData
          metaIcon={require('@assets/png/shovel.png')}
          metaData="57 days"
        />
        <MetaData
          metaIcon={require('@assets/png/droplet.png')}
          metaData="85 %"
        />
        <MetaData
          metaIcon={require('@assets/png/temp.png')}
          metaData="20 - 30 C"
        />
      </View>

      <View style={styles.information}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 90 }}
          showsVerticalScrollIndicator={false}
        >
          <Title>About</Title>

          <SmallText>Rosemary is a small evergreen plant of the mint family, the leaves of which are used to flavour foods. Native to the Mediterranean region, rosemary has naturalized throughout much of Europe and is widely grown in gardens in warm climates. The leaves have a pungent, slightly bitter taste and, dried or fresh, are generally used to season foods.</SmallText>

          <InfoButton btnLabel="Kernel Time" />
          <InfoButton btnLabel="Method" />
          <InfoButton btnLabel="Watering" />
          <InfoButton btnLabel="Harvest" />
          <InfoButton btnLabel="Application" />
          <InfoButton btnLabel="Diseases and Solutions" />

        </ScrollView>
      </View>
      <Image
        style={styles.plantImage}
        source={require('@assets/png/rosemary2.png')}
      />
    </LinearGradient >
  );
}

interface InfoButtonProps {
  btnLabel: string
}

function InfoButton({ btnLabel }: InfoButtonProps) {
  return (
    <View style={styles.infoButton}>
      <BodyBold style={{ color: SECONDARY }}>{btnLabel}</BodyBold>
      <Image source={require('@assets/png/forward.png')} />
    </View>
  );
}

interface MetaDataProps {
  metaIcon: ImageProps['source'],
  metaData: string
}

function MetaData({ metaIcon, metaData }: MetaDataProps) {
  return (
    <View style={styles.metaData}>
      <View style={{ width: 40 }}>
        <Image source={metaIcon} />
      </View>
      <SmallText>{metaData}</SmallText>
    </View>
  );
}

export default PlantInformation;