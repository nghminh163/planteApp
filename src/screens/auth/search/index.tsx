import BodyRegular from "@components/Typography/BodyRegular";
import Header2 from "@components/Typography/Header2";
import SmallSubText from "@components/Typography/SmallSubText";
import SmallText from "@components/Typography/SmallText";
import TitleBold from "@components/Typography/TitleBold";
import { DARK } from "@utils/colors";
import React from "react";
import { Dimensions, FlatList, Image, ImageProps, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import styles from "./styles";

function SearchScreen() {
  const data = [
    { id: '1', plantImage: require("@assets/png/plant1.png"), title: 'Succulent', imageColor: ['#E5E0DA', '#D3CCC4'], labelColor: '#FFFAF5' },
    { id: '2', plantImage: require("@assets/png/fern.png"), title: 'Fern', imageColor: ['#DAE0E5', '#C4C9D3'], labelColor: '#F5F7FA' },
    { id: '3', plantImage: require("@assets/png/palm.png"), title: 'Palms', imageColor: ['#E1E5DA', '#CED3C4'], labelColor: '#F4F9F2' },
    { id: '4', plantImage: require("@assets/png/pothos.png"), title: 'Pothos', imageColor: ['#E5DADF', '#CEBCBF'], labelColor: '#F7F0F4' },
    { id: '5', plantImage: require("@assets/png/monstera.png"), title: 'Monstera', imageColor: ['#DAE0E5', '#C4C9D3'], labelColor: '#F5F7FA' },
    { id: '6', plantImage: require("@assets/png/calathea.png"), title: 'Calathea', imageColor: ['#E5E0DA', '#D3CCC4'], labelColor: '#FFFAF5' },
  ]

  const screenWidth = Dimensions.get('window').width;
  const numOfColumn = 2;
  return (
    <View>
      <View style={styles.topScreenContainer}>
        <Image
          style={styles.backButton}
          source={require('@assets/png/back.png')}
        />
        <Header2>Search Results</Header2>
        <View style={styles.backButton} />
      </View>

      <View style={styles.searchBar}>
        <Image
          style={styles.searchIcon}
          source={require('@assets/png/search.png')}
        />
        <BodyRegular style={styles.searchText}>Search Plant</BodyRegular>
      </View>

      <View style={styles.categoryContainer}>
        <TitleBold >Categories</TitleBold>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Widget
              plantImage={item.plantImage}
              title={item.title}
              imageColor={item.imageColor}
              labelColor={item.labelColor}
            />
          )}
          numColumns={numOfColumn}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatList}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          ListFooterComponent={<View style={{ height: 20 }} />}
        />
      </View>



    </View>

  );
}

interface WidgetProps {
  plantImage: ImageProps['source'],
  title: string,
  imageColor: string[],
  labelColor: string
}

function Widget({ plantImage, title, imageColor, labelColor }: WidgetProps) {
  return (
    <View style={styles.plantWidget}>
      <LinearGradient
        colors={imageColor}
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
      <View style={[styles.widgetLabel, { backgroundColor: labelColor }]}>
        <SmallSubText style={{ lineHeight: heightPercentageToDP(2.5) }}>{title}</SmallSubText>
        {/* <SmallText style={{ color: DARK }} >Starfish Snake</SmallText> */}
      </View>
    </View>
  );
}

export default SearchScreen;