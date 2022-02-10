import BodyRegular from "@components/Typography/BodyRegular";
import Header2 from "@components/Typography/Header2";
import TitleBold from "@components/Typography/TitleBold";
import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

function SearchScreen() {
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
        <TitleBold>Categories</TitleBold>
      </View>


    </View>

  );
}

export default SearchScreen;