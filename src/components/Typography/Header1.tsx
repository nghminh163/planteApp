import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Header1(props: TextProps) {
  return <Text {...props} style={[styles.header1, props.style]} />;
}

const styles = StyleSheet.create({
  header1: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: hp(4),
    lineHeight: hp(5.5),
  },
});

export default Header1;
