import Header2 from "@components/Typography/Header2";
import React from "react";
import { Dimensions, FlatList, Image, ImageProps, View } from "react-native";
import styles from "./style";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from "react-native-linear-gradient";
import SmallText from "@components/Typography/SmallText";
import SmallSubText from "@components/Typography/SmallSubText";
import { DARK } from "@utils/colors";

function CategoryScreenScreen() {
  const data = [
    { id: '1', source: require("@assets/png/plant1.png"), backgroundColor: ['#E5E0DA', '#D3CCC4'] },
    { id: '2', source: require("@assets/png/plant2.png"), backgroundColor: ['#DAE0E5', '#C4C9D3'] },
    { id: '3', source: require("@assets/png/plant3.png"), backgroundColor: ['#E5DADF', '#CEBCBF'] },
    { id: '4', source: require("@assets/png/plant4.png"), backgroundColor: ['#E1E5DA', '#CED3C4'] },
    { id: '5', source: require("@assets/png/plant5.png"), backgroundColor: ['#E5DADF', '#CEBCBF'] },
  ];

  const screenWidth = Dimensions.get('window').width;
  const numOfColumn = 2;
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image style={styles.bannerImage} source={require("@assets/png/banner.jpeg")} />
      </View>
      <Header2 style={styles.header}>Succulent</Header2>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Widget plantImage={item.source} backgroundColor={item.backgroundColor} />
        )}
        numColumns={numOfColumn}
        keyExtractor={(item) => item.id}
        style={{ marginLeft: wp(9.5), marginTop: hp(3.1) }}
        contentContainerStyle={{
          width: screenWidth - 2 * wp(9.5),
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          alignItems: 'stretch'
        }}
      />
    </View>
  );
}

interface WidgetProps {
  plantImage: ImageProps['source'],
  backgroundColor: string[]
}

function Widget({ plantImage, backgroundColor }: WidgetProps) {
  return (
    <View style={styles.plantWidget}>
      <LinearGradient
        colors={backgroundColor}
        locations={[0.341, 0.792]}
        useAngle={true}
        angle={113.99}
        angleCenter={{ x: 0.5, y: 0.5 }}
        style={styles.widgetImageContainer}
      >
        <Image
          style={styles.widgetImage}
          source={plantImage}
        />
      </LinearGradient>
      <View style={styles.widgetLabel}>
        <SmallSubText style={{ lineHeight: hp(2.5) }}>Houseplant</SmallSubText>
        <SmallText style={{ color: DARK }} >Starfish Snake</SmallText>
      </View>
    </View>
  )
}

export default CategoryScreenScreen;