import BodyRegular from "@components/Typography/BodyRegular";
import Header2 from "@components/Typography/Header2";
import SmallSubText from "@components/Typography/SmallSubText";
import SmallText from "@components/Typography/SmallText";
import TitleBold from "@components/Typography/TitleBold";
import { LIGHT } from "@utils/colors";
import React from "react";
import { FlatList, Image, ImageProps, PixelRatio, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { heightPercentageToDP } from "react-native-responsive-screen";
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
  const numOfColumn = 2;
  const { height } = Image.resolveAssetSource(require('@assets/png/background.png'));

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require('@assets/png/background.png')}
      />

      <View style={styles.topScreenContainer}>
        <Image
          style={styles.backButton}
          source={require('@assets/png/accent-back.png')}
        />
        <Header2 style={{ color: LIGHT }}>Search Results</Header2>
        <View style={styles.backButton} />
      </View>

      <View style={[
        styles.searchBar,
        { marginTop: (height / PixelRatio.get()) - (PixelRatio.get() === 2 ? 152 : 90) }
      ]}>
        <Image
          style={styles.searchIcon}
          source={require('@assets/png/search.png')}
        />
        <BodyRegular style={styles.searchText}>Search Plant</BodyRegular>
      </View>


      <TitleBold style={styles.titleBold} >Suggestion Plant</TitleBold>
      <View style={styles.suggestionPlant}>
        <SearchSuggestion metaIcon={require('@assets/png/plant6.png')} metaData={'Agave'} />
        <SearchSuggestion metaIcon={require('@assets/png/plant7.png')} metaData={'Monstera obliqua'} />
        <SearchSuggestion metaIcon={require('@assets/png/plant8.png')} metaData={'Cereus cactus'} />
      </View>

      <TitleBold style={styles.titleBold} >Categories</TitleBold>

      {/* <View style={styles.categoryContainer}> */}
      {/* <TitleBold style={styles.titleBold} >Categories</TitleBold> */}
      <View style={{ flex: 1 }}>
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
          columnWrapperStyle={{ justifyContent: 'space-between', }}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ height: 20, }} />}
        />
      </View>

      {/* </View> */}
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
        <SmallSubText style={styles.smallSubText}>{title}</SmallSubText>
      </View>
    </View>
  );
}

interface MetaDataProps {
  metaIcon: ImageProps['source'],
  metaData: string
}

function SearchSuggestion({ metaIcon, metaData }: MetaDataProps) {
  return (
    <View style={styles.metaData}>
      <View style={styles.metaIconContainer}>
        <Image style={styles.metaIcon} source={metaIcon} />
      </View>
      <SmallText>{metaData}</SmallText>
    </View>
  );
}

export default SearchScreen;